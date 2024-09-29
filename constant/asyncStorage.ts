import AsyncStorage from "@react-native-async-storage/async-storage";


export const setItem = async (key: string, value: number) => {
  try {
    await AsyncStorage.setItem(key, value.toString());
  } catch (e) {
    console.log(e);
  }
};

export const getItem = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.log(e);
  }
};

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};


export const formatTimeDifference = (dateString: Date) => {
  const now = new Date();
  const date = new Date(dateString);

  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (diffInSeconds >= 86400) {
    return `${Math.floor(diffInSeconds / 86400)}d`;
  } else if (diffInSeconds >= 3600) {
    return `${Math.floor(diffInSeconds / 3600)}h`;
  } else if (diffInSeconds >= 60) {
    return `${Math.floor(diffInSeconds / 60)}m`;
  } else {
    return `${diffInSeconds}s`;
  }
};