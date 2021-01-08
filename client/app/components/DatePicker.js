import React, { useState } from 'react';
import { View, Text, Platform, StyleSheet,TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Icon from './Icon';
import colors from '../utilities/colors';

export default function DatePicker({ onPress, thisDate }) {
  const [date, setDate] = useState(thisDate);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [calendarIcon, setCalendarIcon] = useState(true)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = () => {
    setShow(!show);
    setMode('date');
    setCalendarIcon(true)
  };

  const showDatepicker = () => {
    showMode('date');
    setCalendarIcon(!calendarIcon)
  };

  const submitDate = () => {
    onPress(date);
    setShow(false)
    setCalendarIcon(true)
  }

  const today = new Date(date).getDate().toString() + '.' + (new Date(date).getMonth() + 1).toString() + '.' + new Date(date).getFullYear().toString()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={(showDatepicker)}  >
        <Text style={ styles.text }>{today}</Text>
        <Icon name={calendarIcon ? 'calendar' : 'close'} style={styles.calendarIcon} size={30} color={colors.white} backgroundColor={colors.yellow}  />
      </TouchableOpacity>
      {show && 
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date(date)}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      }
      {show && 
      <Icon style={ styles.icon } name="check" size={30} onPress={submitDate} backgroundColor={colors.yellow}/>
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
    borderRadius: 50,
  }, 
  calendarIcon: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'flex-end',
  },
  buttonContainer:  {
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 280,
    width: "100%",
    flexDirection: 'row',
    borderColor: colors.green,
    backgroundColor: colors.yellow,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    paddingRight: 20
  },
  text: {
    width: 100,
    flexWrap: 'wrap',
    fontSize: 18,
    left: 10
  }
})