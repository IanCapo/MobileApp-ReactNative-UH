import React from 'react';
import { TextInput } from 'react-native';

const FormTextInput = ({ placeholder, editable, focused }) => {
  const [value, onChangeText] = React.useState(placeholder);
  return (
    <TextInput
      style={{ height: 40, fontSize: 16 }}
      onChangeText={text => onChangeText(text)}
      value={value}
      editable={editable}
      onFocus={focused}
    />
  );
}

export default FormTextInput;