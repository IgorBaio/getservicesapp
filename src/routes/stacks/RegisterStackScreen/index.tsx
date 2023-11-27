import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../..";
import { LoginScreen } from "../../../pages/LoginScreen";

const RegisterStack = createNativeStackNavigator<RootStackParamList>()

export const RegisterStackScreen = () => {
    return <RegisterStack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false, gestureEnabled: false, animation: 'fade' }}
    >
        <RegisterStack.Screen name="LoginScreen" component={LoginScreen} />

    </RegisterStack.Navigator>
}