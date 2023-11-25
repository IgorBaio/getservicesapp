import React from "react";
import {
  Text,

  HStack,
  Center,
  Pressable,
} from "native-base";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useScreen } from "../stores/screen";
import { useAppDispatch } from "../app/hook";

interface MyTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

export function MyTabBar({ navigation, state, descriptors }: MyTabBarProps) {
  const { screen, setScreen } = useScreen((state) => state);

  const selectScreen = (page: number) => {
    setScreen(page)
  }

  return (
    <>
      <HStack bg="white" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          opacity={screen == 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => {
            selectScreen(0);
            navigation.navigate('HomeScreen')
          }}
        >
          <Center>
            <MaterialIcons name='home' size={24} color='black' />
            <Text color="indigo.600" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={screen == 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => {
            selectScreen(1);
            navigation.navigate('Search')
          }}
        >
          <Center>
            <MaterialIcons name='search' size={24} color='black' />
            <Text color="indigo.600" fontSize="12">
              Search
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={screen == 2 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => {
            selectScreen(2);
            navigation.navigate('Profile')
          }}
        >
          <Center>
            <AntDesign name="user" size={24} color="black" />
            <Text color="indigo.600" fontSize="12">
              Profile
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </>
  );
}
