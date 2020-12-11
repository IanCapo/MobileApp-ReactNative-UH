import React, { useState } from 'react';

export default function NumInput({ initialVal, editable }) {
  const [value, setValue] = useState(initialVal)
  return (
    <TextInput
      value={value.toString()}
      onChange={value => setValue(value.toString())}
      editable={editable}
       />
  );
};