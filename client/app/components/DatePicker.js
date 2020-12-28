import React, { useState } from 'react';
import { View, Button, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Icon from './Icon';
import colors from '../utilities/colors';

export default function DatePicker({ onPress }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = () => {
    setShow(!show);
    setMode('date');
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const submitDate = () => {
    onPress(date);
    setShow(false)
  }

  const today = date.getDate().toString() + '.' + (date.getMonth() + 1).toString() + '.' + date.getFullYear().toString()

  return (
    <View style={styles.container}>
      <View style={{ width: 300 }} >
        <Button onPress={(showDatepicker)} title={today} />
      </View>
      {show && 
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      }
      {show && 
      <Icon style={ styles.icon } name="check" size={30} onPress={submitDate}/>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: 50
  }
})