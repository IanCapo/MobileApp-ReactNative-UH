import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import usePostData from '../hooks/usePostData';
import Screen from '../components/Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import VerticalLine from "../components/VerticalLine";

import DevelopmentForm from '../components/DevelopmentForm';
import MemoriesForm from '../components/MemoriesForm';
import MilestonesForm from '../components/MilestonesForm';

export default function AddScreen({onPress}) {
  const [category, setCategory] = useState('milestones');

  const handleSubmit = async (body) => {
      const result = await usePostData(`${category}`,
        body
      )
      if(result === 201){
        onPress()
      } else {
        console.log("error");
      }
   
  }

  const items = [
    { name: "heart-multiple-outline", value: "milestones", isActive: category === "milestones" },
    { name: "chart-line", value: "development", isActive: category === "development" },
    { name: "airballoon", value: "memories", isActive: category === "memories" }
  ]

  const initialValues = {
    memories: { "title": "", "description": "" },
    milestones: { "title": "", "icon": ""  },
    development: { "weight": "", "lenght": ""}
  }

  return (
  <Screen style={ styles.container }>
      <Text>What would you like to add?</Text>
     <View style={ styles.categoryPicker }> 
          {items.map(item => (
            <CategoryPickerItem key={item.name} name={item.name} value={item.value} isActive={item.isActive} onPress={(value) => setCategory(value)} />
          ))}
    </View> 
    <Text>{category.toUpperCase()}</Text>
    <VerticalLine style={ styles.divider }/>
      { category === "memories" &&
        <MemoriesForm
          initialValues={initialValues.memories}
          onPress={body => handleSubmit(body)}
        />
      }
      { category === "milestones" &&
        <MilestonesForm
          initialValues={initialValues.memories}
          onPress={body => handleSubmit(body)}
        />
      }
      { category === "development" &&
        <DevelopmentForm
          initialValues={initialValues.memories}
          onPress={body => handleSubmit(body)}
        />
      }
  </Screen>
  );
};


const styles = StyleSheet.create({
  categoryPicker: {
    flexDirection: 'row',
    padding: 30
  },
  container: {
    padding: 40,
    paddingTop: 20,
    flex: 1,
    alignItems: "center"
  },
  divider: {
    backgroundColor: "grey",
    height: 1,
    width: 250,
    marginBottom: 20 ,
    marginTop: 10
  }
});