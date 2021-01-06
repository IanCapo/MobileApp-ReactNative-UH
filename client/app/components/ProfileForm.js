import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput, Text } from 'react-native';
import * as Yup from "yup";
import { Formik } from 'formik';

import colors from '../utilities/colors';
import Icon from './Icon';
import ImageInput from '../components/ImageInput';
import DatePicker from './DatePicker';
import Screen from './Screen';
import SwitchComponent from './Switch';
import cache from '../utilities/cache';


export default function Form({navigation}) {
  const [image, setImage] = useState();
  const [todayDate, setDate] = useState(new Date());
  const [sex, setSex] = useState('girl');
  let img = image;
  let sx = sex;


  useEffect(() => {
    const cachedData = async () => {
      const jsonData = await cache.getData('profile')
      if(jsonData.ok){
        const data = JSON.parse(jsonData.data)
        setImage(data.image.url);
      }
    }
    cachedData()
  }, [])

  const handleSubmit = async (data) => {
    let body = {
        name: data["name"],
        dob: todayDate,
        weight: data["weight"],
        length: data["length"],
        sex: sx,
        image: {
          url: img
        }
      };

      cache.storeData('profile', body)
      navigation.navigate('dashboard');
      
  };

  const initialValues = {
     "name": "",
     "dob": "",
     "sex": "",
     "weight": "",
     "length": ""
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    weight: Yup.number().required().label("Weight"),
    length: Yup.number().required().label("length")
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, setFieldTouched, touched, errors, handleSubmit }) => (
        <Screen style={ styles.container }>
        <Text style={ styles.headline }>Update your childs profile</Text>
        <ImageInput value={values.image} onPress={img => setImage(img)} />
        <Text style={ styles.text }>Name of your child</Text>
          <TextInput
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
            placeholder="name"
            style={ styles.input}
            placeholderTextColor={ colors.primary }
          />
          {touched.name && errors.name &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.name}</Text>
          }
          <DatePicker thisDate={todayDate} onPress={(value) => setDate(value)} />
          <SwitchComponent onPress={value => setSex(value)} />
          <Text style={styles.text}>Weight in g</Text>
          <TextInput
            value={values.weight}
            onChangeText={handleChange('weight')}
            placeholder="Weight"
            onBlur={() => setFieldTouched('weight')}
            style={styles.input}
            placeholderTextColor={colors.primary}
          />
          {touched.weight && errors.weight &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.weight}</Text>
          }
          <Text style={styles.text}>Length in cm</Text>
          <TextInput
            value={values.length}
            onChangeText={handleChange('length')}
            placeholder="length"
            onBlur={() => setFieldTouched('length')}
            style={styles.input}
            placeholderTextColor={colors.primary}
          />
          {touched.length && errors.length &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.length}</Text>
          }
          <Icon
            name='check'
            onPress={handleSubmit}
            style={ styles.button }
            size={30}
          />
        </Screen>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 20
  },
  container: {
    padding: 30
  }, 
  headline: {
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 20
  },
  image: {
    marginBottom: 20
  },
  input: {
    padding: 12,
    paddingLeft: 20,
    backgroundColor: colors.yellow,
    width: "100%",
    borderRadius: 20,
    marginTop: 10,
    color: colors.primary
  },
  switch: {
    alignSelf: 'flex-start'
  },
  text: {
    left: 10,
    marginTop: 15,
    alignSelf: 'flex-start'
  }
})