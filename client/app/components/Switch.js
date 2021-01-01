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
        <Switch
          style={{ marginTop: 30, marginBottom: 10 }}
          onValueChange={toggleSwitch}
          value={switchValue}
          trackColor={colors.yellow}
          ios_backgroundColor={colors.secondary}
        />
      <Text>
        {switchValue ? 'Boy' : 'Girl'}
      </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 10
  },
});

export default SwitchComponent;