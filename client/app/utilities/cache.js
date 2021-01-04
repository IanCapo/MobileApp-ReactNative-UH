import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
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
    return jsonValue ? { ok: true, data: jsonValue } : null;
  } catch (e) {
    console.log(e);
  }
}

removeFew = async () => {
  const keys = ['profile', 'development', 'milestones', 'memories']
  try {
    await AsyncStorage.multiRemove(keys)
  } catch (e) {
    // remove error
  }

  console.log('Done')
}


export default {
  getData,
  storeData,
  removeFew
}