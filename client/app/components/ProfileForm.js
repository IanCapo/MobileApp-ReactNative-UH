import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native';
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
  const [myData,setMyData] = useState(false)
  let img = image;
  let sx = sex;


  useEffect(() => {
    const cachedData = async () => {
      const jsonData = await cache.getData('profile')
      if(jsonData.ok){
        const data = JSON.parse(jsonData.data)
        setImage(data.image.url);
        setMyData(data)
      }
    }
    cachedData()
  }, [])

  const handleSubmit = async (data) => {
    let body = {
        name: data["name"] ? data["name"] : myData ? myData.name : '',
        dob: todayDate ? todayDate : myData ? myData.dob : '',
        weight: data["weight"] ? data["weight"] : myData ? myData.weight : null,
        length: data["length"] ? data["length"] : myData ? myData.length : null,
        sex: sx ? sx : myData ? myData.sex : '',
        image: {
          url: img ?img : myData ? myData.img.url : ''
        }
      };
      cache.storeData('profile', body)
      navigation.navigate('dashboard'); 
  };

  const initialValues = {
     "name": myData ? myData.name : '',
     "dob": myData ? new Date(myData.dob) : '',
     "sex": myData ? myData.sex : '',
     "weight": myData ? myData.weight : '',
     "length": myData ? myData.length : '',
  }

  let validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    weight: Yup.number().required().label("Weight"),
    length: Yup.number().required().label("length")
  });
  
  if(myData) {
    validationSchema = Yup.object().shape({
      name: Yup.string().min(1).label("Name"),
      weight: Yup.number().label("Weight"),
      length: Yup.number().label("length")
    });
  } 

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, setFieldTouched, touched, errors, isValid, handleSubmit }) => (
        <Screen style={ styles.container }>
        <Text style={ styles.headline }>Update your childs profile</Text>
        {myData && <ImageInput value={values.image} existingImage={image} onPress={img => setImage(img)} />}
        {!myData && <ImageInput value={values.image} onPress={img => setImage(img)} />}
        <Text style={ styles.text }>Name of your child</Text>
          <TextInput
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
            placeholder={myData ? myData.name : "name"}
            style={ styles.input}
            placeholderTextColor={ colors.primary }
          />
          {touched.name && errors.name &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.name}</Text>
          }
          <Text style={styles.text}>Date of birth</Text>
          {myData && <DatePicker thisDate={myData.dob} onPress={(value) => setDate(value)} /> }
          {!myData && <DatePicker thisDate={todayDate} onPress={(value) => setDate(value)} />}
          <View style={ styles.switch }>
            <Text style={styles.text}>Sex</Text>
            <SwitchComponent value={myData.sex} onPress={value => setSex(value)} />
          </View>
          <Text style={styles.text}>Weight in lbs</Text>
          <TextInput
            value={values.weight}
            onChangeText={handleChange('weight')}
            placeholder={ myData ? myData.weight : "Weight" }
            onBlur={() => setFieldTouched('weight')}
            style={styles.input}
            placeholderTextColor={colors.primary}
            keyboardType='numeric'
          />
          {touched.weight && errors.weight &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.weight}</Text>
          }
          <Text style={styles.text}>Length in inches</Text>
          <TextInput
            value={values.length}
            onChangeText={handleChange('length')}
            placeholder={ myData ? myData.length : "length" }
            onBlur={() => setFieldTouched('length')}
            style={styles.input}
            placeholderTextColor={colors.primary}
            keyboardType='numeric'
          />
          {touched.length && errors.length &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.length}</Text>
          }
          <Icon
            name='check'
            onPress={handleSubmit}
            style={ styles.button }
            size={30}
            backgroundColor={isValid ? colors.green : colors.white}
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
    flexDirection: 'row',
    width: "100%",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10
  },
  text: {
    left: 10,
    marginTop: 15,
    alignSelf: 'flex-start'
  }
})