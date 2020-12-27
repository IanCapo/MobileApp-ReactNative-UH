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
    const body = {
      "title": data["title"],
      "date": data["date"],
      "description": data["description"],
      "image": { url: img }
    }
    onPress(body);
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    date: Yup.string().required().label("Date of Birth"),
    description: Yup.string().required().label("Description")
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, setFieldTouched, touched, isValid, errors, handleSubmit }) => (
        <React.Fragment>
        <ImageInput value={values.image} onPress={value => setImage(value)} />
        <Text style={ styles.text }>Title</Text>
          <TextInput
            value={values.title}
            onChangeText={handleChange('title')}
            onBlur={() => setFieldTouched('title')}
            placeholder="title"
            style={ styles.input}
            placeholderTextColor={ colors.primary }
          />
          {touched.title && errors.title &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.title}</Text>
          }
          <Text style={styles.text}>Date</Text>
          <TextInput
            value={values.date}
            onChangeText={handleChange('date')}
            placeholder="date"
            onBlur={() => setFieldTouched('date')}
            style={styles.input}
            placeholderTextColor={colors.primary}
          />
          {touched.date && errors.date &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.date}</Text>
          }
          <Text style={styles.text}>Describe your memory</Text>
          <TextInput
            value={values.description}
            onChangeText={handleChange('description')}
            placeholder="description"
            onBlur={() => setFieldTouched('description')}
            style={styles.input}
            placeholderTextColor={colors.primary}
          />
          {touched.description && errors.description &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.description}</Text>
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