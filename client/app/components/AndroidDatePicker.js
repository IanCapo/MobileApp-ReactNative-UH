import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

import colors from '../utilities/colors';
import Icon from './Icon';

export default function AndroidDatePicker({thisDate,  onPress }) {
  const [month, setDateMonth] = useState((new Date(thisDate).getMonth() + 1).toString());
  const [year, setYear] = useState(new Date(thisDate).getFullYear().toString());
  const [day, setDay] = useState(new Date(thisDate).getDate().toString());
  const [buttonColor, setButtonColor] = useState(colors.yellow)
  
  
  const handleSubmit = () => {
    const dayFormatted = day.length < 2 ? `0${day}` : day;
    const monthFormatted = month.length < 2 ? `0${month}` : month;
    const newDate = new Date(`${year}-${monthFormatted}-${dayFormatted}`)
    onPress(newDate);
    setButtonColor(colors.green)
  }

  return (
  <View style={ styles.container }>
        <TextInput
          style={styles.inputMonths}
          onChangeText={month => setDateMonth(month)}
          value={month}
          keyboardType='numeric'
        />
        <TextInput
          style={ styles.inputDay }
          onChangeText={day => setDay(day)}
          value={day}
          keyboardType='numeric'
        />
        <TextInput
          style={ styles.inputYear }
          onChangeText={year => setYear(year)}
          value={year}
          keyboardType='numeric'
        />
      <Icon style={styles.icon} name="check" size={30} onPress={handleSubmit} backgroundColor={buttonColor} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10
  },
  icon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: 50,
    marginLeft: 50
  },
  inputDay: {
    height: 40,
    width: 40,
    fontSize: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.yellow,
    borderTopColor: colors.yellow,
    paddingLeft: 10
  },
  inputMonths: {
    height: 40,
    width: 40,
    fontSize: 16 ,
    borderWidth: 1,
    borderColor: colors.yellow,
    paddingLeft: 10
  },
  inputYear: {
    height: 40,
    width: 80,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.yellow,
    paddingLeft: 20
  }
});