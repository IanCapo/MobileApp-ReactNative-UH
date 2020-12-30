import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import usePostData from '../hooks/usePostData';
import Screen from '../components/Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';

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
    development: { "weight": "", "height": "", "headcurcumference": ""}
  }

  return (
  <Screen style={ styles.container }>
     <View style={ styles.categoryPicker }> 
          {items.map(item => (
            <CategoryPickerItem key={item.name} name={item.name} value={item.value} isActive={item.isActive} onPress={(value) => setCategory(value)} />
          ))}
    </View> 
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
  }
});