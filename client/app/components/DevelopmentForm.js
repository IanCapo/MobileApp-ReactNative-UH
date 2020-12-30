import React, { useState } from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native';
import * as Yup from "yup";
import { Formik } from 'formik';

import colors from '../utilities/colors';
import Icon from './Icon';
import DatePicker from './DatePicker';


export default function Form({ initialValues, onPress }) {
  const [todayDate, setDate] = useState(new Date());

  const handleSubmit = (data, {resetForm}) => {
    let body = [];
      let date = todayDate;
      let weight = { key: "weight", value: data["weight"] };
      let height = { key: "height", value: data["height"] };
      let head = { key: "headcircumference", value: data["headcircumference"] };
      body.push(date, weight, height, head)

      onPress(body);
      setDate(new Date());
      resetForm()
  };

  const validationSchema = Yup.object().shape({
    weight: Yup.string().required().label("Weight"),
    height: Yup.string().required().label("Height"),
    headcircumference: Yup.string().required().label("Head circumference")
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
          <Text style={styles.text}>Height in cm</Text>
          <TextInput
            value={values.height}
            onChangeText={handleChange('height')}
            placeholder="Height"
            onBlur={() => setFieldTouched('height')}
            style={styles.input}
            placeholderTextColor={colors.primary}
          />
          {touched.height && errors.height &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.height}</Text>
          }
          <Text style={styles.text}>Head circumference in cm</Text>
          <TextInput
            value={values.headcircumference}
            onChangeText={handleChange('headcircumference')}
            placeholder="Headcircumference"
            onBlur={() => setFieldTouched('headcircumference')}
            style={styles.input}
            placeholderTextColor={colors.primary}
          />
          {touched.headcircumference && errors.headcircumference &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.headcircumference}</Text>
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