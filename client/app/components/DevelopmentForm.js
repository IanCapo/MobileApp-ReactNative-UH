import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native';
import * as Yup from "yup";
import { Formik } from 'formik';

import colors from '../utilities/colors';
import Icon from './Icon';
import DatePicker from './DatePicker';
import cache from "../utilities/cache";


export default function Form({ initialValues, onPress }) {
  const [todayDate, setDate] = useState(new Date());
  const [dob, setDob] = useState();
  const [sex, setSex] = useState();

  useEffect(() => {
    const cachedData = async () => {
      const jsonData = await cache.getData('profile')
      if (jsonData.ok) {
        const data = JSON.parse(jsonData.data)
        setDob(data.dob);
        setSex(data.sex);
      }
    }
    cachedData()
  }, [])


  const handleSubmit = (data, {resetForm}) => {
    let body = {
      date:  todayDate,
      length: data["length"],
      weight: data["weight"],
      refDate: dob,
      sex: sex
    }
    
      onPress(body);
      setDate(new Date());
      resetForm()
  };

  const validationSchema = Yup.object().shape({
    weight: Yup.string().required().label("Weight"),
    length: Yup.string().required().label("Length")
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, setFieldTouched, touched, errors, handleSubmit, isValid }) => (
        <View>
          <Text style={styles.text}>Date</Text>
          <DatePicker thisDate={todayDate} onPress={(value) => setDate(value)} />
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
            placeholder="Length"
            onBlur={() => setFieldTouched('length')}
            style={styles.input}
            placeholderTextColor={colors.primary}
          />
          {touched.length && errors.length &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.length}</Text>
          }
          <Icon
            name='check'
            onPress={isValid && handleSubmit}
            style={ styles.icon } 
            size={30}
            backgroundColor={isValid ? colors.green : colors.primary}
          />
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 12,
    paddingLeft: 20,
    backgroundColor: colors.yellow,
    width: 280,
    borderRadius: 20,
    marginTop: 10,
    color: colors.primary
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 20
  },
  text: {
    left: 10,
    marginTop: 10,
    alignSelf: 'flex-start'
  }
})