import React from "react";
import { Text, View } from "react-native";
import { HomeStructure } from "../../templates/HomeStructure";

export function HomeScreen({navigation}: any){
    return (
        <HomeStructure navigation={navigation} />
    )
}