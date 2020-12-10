import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../utilities/colors';
import TextInput from './TextInput';
import EditButton from './EditButton';

export default function InputWithLabel({ icon, placeholder, withEditOption }) {
  const [editable, setEditable] = useState(false);
  return (
  <View style={styles.row}>
    <View style={ styles.container }>
    <MaterialCommunityIcons style={ styles.icon } name={ icon } size={30} />
        <TextInput 
          style={styles.inputField} 
          placeholder={placeholder} 
          editable={editable} 
          onFocus={editable}
        />
      </View>
      {withEditOption && <EditButton onPress={() => setEditable(true)}/> }
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    paddingLeft: 20,
    marginVertical: 10,
    width: 250,
    marginRight: 10
  },
  icon: {
    marginRight: 20
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  }
});