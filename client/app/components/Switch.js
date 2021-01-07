import React, { useState } from 'react';
import {
  Switch,
  View,
  Text,
  StyleSheet
} from 'react-native';
import colors from '../utilities/colors';

const SwitchComponent = ({onPress}) => {
  const [switchValue, setSwitchValue] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = (value) => {
    setSwitchValue(value);
    onPress(switchValue ? 'girl' : 'boy' )
  };

  return (
      <View style={styles.container}>
      <Text>
        Girl
      </Text>
        <Switch
          style={{ marginLeft: 10, marginRight: 10 }}
          onValueChange={toggleSwitch}
          value={switchValue}
          trackColor={{ false: 'lightgray', true: 'lightgray' }}
          thumbColor={isEnabled ? "#7D84B2" : colors.yellow}
        />
        <Text>Boy</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
});

export default SwitchComponent;