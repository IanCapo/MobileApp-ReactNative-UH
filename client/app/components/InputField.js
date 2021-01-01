import React from 'react'
import { useFormikContext } from 'formik';
import { TextInput } from 'react-native';

export default function FormField({ name, width, ...otherProps }) {
  const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext();
  return (
    <React.Fragment>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        {...otherProps}
        width={width}
      />
    </React.Fragment>
  )
}