import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../utilities/colors';
import TextInput from './TextInput';
import EditButton from './EditButton';

export default function InputWithLabel({ icon, placeholder, isEditable, unit, withEditOption = true  }) {
  const [editable, setEditable] = useState(isEditable);
  
  return (
  <View style={styles.row}>
    <View style={ styles.container }>
    <MaterialCommunityIcons style={ styles.icon } name={ icon } size={30} />
       {!isEditable &&  <TextInput
          style={styles.inputField}
          placeholder={placeholder}
          editable={editable}
          onFocus={editable}
          unit={unit}
        />
      }
        {isEditable && <TextInput
          style={styles.inputField}
          placeholder={placeholder}
          editable={true}
          onFocus={editable}
          unit={unit}
        />}
        { unit && <Text style={styles.unit}>{unit}</Text> }
      </View>
      {withEditOption && <EditButton onPress={() => setEditable(true)}/> }
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
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
  },
  unit: {
    position: "absolute",
    right: 20
  }
});