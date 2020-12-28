import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import usePostData from '../hooks/usePostData';
import Screen from '../components/Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import usePutData from '../hooks/usePutData';

import ProfileForm from '../components/ProfileForm';
import MemoriesForm from '../components/MemoriesForm';
import MilestonesForm from '../components/MilestonesForm';

export default function AddScreen(props) {
  const [category, setCategory] = useState('profile');

  const handleSubmit = (body) => {
    if (category === "profile") {
      usePutData(`${category}`, body);
    } else {
       usePostData(`${category}`,
        body
      );
    }
  }

  const items = [
    { name: "account-badge-horizontal-outline", value: "profile", isActive: category === "profile"},
    { name: "heart-multiple-outline", value: "milestones", isActive: category === "milestones" },
    { name: "chart-line", value: "development", isActive: category === "development" },
    { name: "airballoon", value: "memories", isActive: category === "memories" }
  ]

  const initialValues = {
    profile: { "name": "", "dob": "", "weight": "", "height": "", "headcircumference":"" },
    memories: { "title": "", "description": "" },
    milestones: { "title": "", "icon": ""  }
  }

  return (
  <Screen style={ styles.container }>
    <View style={ styles.categoryPicker }> 
          {items.map(item => (
            <CategoryPickerItem key={item.name} name={item.name} value={item.value} isActive={item.isActive} onPress={(value) => setCategory(value)} />
          ))}
    </View>
    { category === "profile" && 
        <ProfileForm
          initialValues={initialValues.profile}
          onPress={body => handleSubmit(body)}
        />
  }
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