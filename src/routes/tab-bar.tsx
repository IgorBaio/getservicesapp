import React from "react";
import {
  Text,

  HStack,
  Center,
  Pressable,
} from "native-base";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useScreen } from "../stores/screen";
import { colors } from "../Styles/theme";

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
            <MaterialIcons name='home' size={24} color={screen == 0 ? colors.greenPrimary : colors.bluePrimary} />
            <Text color={screen == 0 ? colors.greenPrimary : colors.bluePrimary} fontSize="12">
              Início
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
            <MaterialIcons name='search' size={24} color={screen == 1 ? colors.greenPrimary : colors.bluePrimary} />
            <Text color={screen == 1 ? colors.greenPrimary : colors.bluePrimary} fontSize="12">
              Procurar
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
            <AntDesign name="user" size={24} color={screen == 2 ? colors.greenPrimary : colors.bluePrimary} />
            <Text color={screen == 2 ? colors.greenPrimary : colors.bluePrimary} fontSize="12">
              Perfil
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </>
  );
}
