import React, { useState } from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native';
import * as Yup from "yup";

import { Formik } from 'formik';
import colors from '../utilities/colors';
import Icon from './Icon';
import ImageInput from './ImageInput';
import DatePicker from './DatePicker';
import IconPicker from './IconPicker';

export default function Form({ initialValues, onPress }) {
  const [image, setImage] = useState();
  const [date, setDate] = useState(new Date());
  const [myIcon, setMyIcon] = useState();
  let img = image;

  const handleSubmit = (data, {resetForm}) => {
    const body = {
      title: data["title"],
      icon: myIcon,
      date: date,
      description: data["description"],
      image: { url: img },
      key: new Date()
    }

    onPress(body);
    setDate(new Date());
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    description: Yup.string().required().label("Description")
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, dirty, isValid = false, setFieldTouched, touched, errors, handleSubmit }) => (
        <View>
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
          <DatePicker thisDate={date} onPress={(value) => setDate(value)}/>
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
          <IconPicker onPress={icon => setMyIcon(icon)} style={ styles.button } />
          <Icon
            name='check'
            onPress={isValid && handleSubmit}
            style={styles.icon}
            size={30}
            backgroundColor={isValid ? colors.green : colors.primary}
          />
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    width: "50%"
  },
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