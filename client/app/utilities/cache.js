import AsyncStorage from '@react-native-async-storage/async-storage';
import calcPercentile from '../utilities/calcPercentile';

const storeData = async (key, value) => {
  try {
    const jsonValue = await AsyncStorage.getItem('user');
    if (key === 'profile' && !jsonValue) {
      const milestone = [{
        date: value.dob,
        title: 'Birth',
        description: 'Today I was born',
        image: value.image,
        key: `${value.dob}_1`,
        icon: 'baby-carriage'
      }];
      let devData = {
        date: value.dob,
        length: value.length,
        weight: value.weight,
        sex: value.sex,
        refDate: value.dob
      }
      devData = await calcPercentile(devData);
      try {
        console.log(key);
        await AsyncStorage.setItem('milestones', JSON.stringify(milestone));
        await AsyncStorage.setItem('development', JSON.stringify([devData]));
        await AsyncStorage.setItem('user', JSON.stringify({user: true}));
      } catch (e) {
        console.log(e);
      }
    }
  } catch (e) {
    console.log(e);
  }
  try {;
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
  const arr = [];
  let newEntry = key === 'development' ? await calcPercentile(value) : value;
  console.log('test');
    AsyncStorage.getItem(key)
    .then(data => {
      if(data) {
        data = JSON.parse(data);
        data.forEach(item => {
          arr.push(item)
        })
        console.log(newEntry);
        arr.push(newEntry)
      } else {
        console.log(newEntry);
        arr.push(newEntry)
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