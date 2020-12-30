import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import CategoryPickerItem from './CategoryPickerItem';

export default function CategoryPicker(onPress) {
  const [category, setCategory] = useState("profile");

  const items =[
    { name: "account-badge-horizontal-outline", value: "profile", isActive: category === "profile" },
    { name: "heart-multiple-outline", value: "milestones", isActive: category === "milestones" },
    { name: "chart-line", value: "development", isActive: category === "development" },
    { name: "airballoon", value: "memories", isActive: category === "memories" }
  ]

  return (
  <View style={ styles.container } >
  {items.map(item => (
    <CategoryPickerItem key={item.name} name={item.name} value={item.value} isActive={item.isActive} onPress={onPress} />
  ))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});