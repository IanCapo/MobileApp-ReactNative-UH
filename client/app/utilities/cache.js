import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  console.log(key, value);
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.log(e);
  }
};


const getData = async (key) => {
  console.log(key);
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue ? { ok: true, data: jsonValue } : null;
  } catch (e) {
    console.log(e);
  }
}

export default {
  getData,
  storeData
}