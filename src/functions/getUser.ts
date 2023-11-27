import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserStorage = async () => {
    const user = await AsyncStorage.getItem('@user');
    if (user) {
        return JSON.parse(user);
    }
    return null;
}
