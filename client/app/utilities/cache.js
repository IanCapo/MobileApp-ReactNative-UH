import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    const jsonValue = await AsyncStorage.getItem('user');
    if (key === 'profile' && !jsonValue) {
      const milestone = {
        date: value.dob,
        title: 'Birth',
        description: 'Today I was born',
        image: value.image,
        key: `${value.dob}_1`,
        icon: 'baby-carriage'
      }
      try {
        await AsyncStorage.setItem('milestones', JSON.stringify(milestone));
        await AsyncStorage.setItem('user', JSON.stringify({user: true}));
      } catch (e) {
        console.log(e);
      }
    }
  } catch (e) {
    console.log(e);
  }
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.log(e);
  }
};


const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    const user = await AsyncStorage.getItem('user');
    if (!user) {
      return { ok: false } 
    } else {
     return jsonValue ? { ok: true, data: jsonValue } : null;
    }
  
    
  } catch (e) {
    console.log(e);
  }
};

const addData = async (key, value) => {
  AsyncStorage.getItem(key)
  .then(data => {
    const arr = [];
    if(data) {
      data = JSON.parse(data);
      arr.push(data)
      arr.push(value)
    } else {
      arr.push(value)
    }
   
    console.log(arr);

   AsyncStorage.setItem(key, JSON.stringify(arr));
  })
}

removeFew = async () => {
  const keys = ['profile', 'development', 'milestones', 'memories', 'user']
  try {
    await AsyncStorage.multiRemove(keys)
  } catch (e) {
    // remove error
  }

  console.log('Done')
};


getAllKeys = async () => {
  let keys = []
  try {
    keys = await AsyncStorage.getAllKeys()
    return keys ? { ok: true, data: keys } : null;
  } catch (e) {
    // read key error
  }
}


export default {
  getData,
  storeData,
  removeFew,
  addData,
  getAllKeys
}