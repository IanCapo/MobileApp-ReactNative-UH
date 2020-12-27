import React, { useState } from 'react'
import { StyleSheet, TextInput, Text } from 'react-native';
import * as Yup from "yup";
import { Formik } from 'formik';

import colors from '../utilities/colors';
import Icon from './Icon';
import ImageInput from '../components/ImageInput';


export default function Form({ initialValues, onPress }) {
  const [image, setImage] = useState();
  let img = image;

  const handleSubmit = (data) => {
    let body = [];
      let name = { key: "name", value: data["name"] };
      let dob = { key: "dob", value: data["dob"] };
      let weight = { key: "weight", value: data["weight"] };
      let height = { key: "height", value: data["height"] };
      let head = { key: "headcircumference", value: data["headcircumference"] };
      let image = { key: "image", value: img}
      body.push(name, dob, weight, height, head, image)

      onPress(body);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    dob: Yup.string().required().label("Date of Birth"),
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
      {({ values, handleChange, setFieldTouched, touched, errors, handleSubmit }) => (
        <React.Fragment>
        <ImageInput value={values.image} onPress={value => setImage(value)}/>
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
          <Text style={styles.text}>Date if birth DD.MM.YYYY</Text>
          <TextInput
            value={values.dob}
            onChangeText={handleChange('dob')}
            placeholder="DoB"
            onBlur={() => setFieldTouched('dob')}
            style={styles.input}
            placeholderTextColor={colors.primary}
          />
          {touched.dob && errors.dob &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.dob}</Text>
          }
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
            onPress={handleSubmit}
            style={ styles.button }
            size={30}
          />
        </React.Fragment>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 12,
    paddingLeft: 20,
    backgroundColor: colors.yellow,
    width: "100%",
    borderRadius: 20,
    marginTop: 10,
    color: colors.primary
  },
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
  text: {
    left: 10,
    marginTop: 10,
    alignSelf: 'flex-start'
  }
})