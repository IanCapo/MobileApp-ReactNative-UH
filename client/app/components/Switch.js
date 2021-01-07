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

  const toggleSwitch = (value) => {
    setSwitchValue(value);
    onPress(switchValue ? 'girl' : 'boy' )
  };

  return (
      <View style={styles.container}>
      <Text>
        {switchValue ? 'Boy' : 'Girl'}
      </Text>
        <Switch
          style={{ marginLeft: 10 }}
          onValueChange={toggleSwitch}
          value={switchValue}
          trackColor={colors.yellow}
          ios_backgroundColor={colors.secondary}
        />
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