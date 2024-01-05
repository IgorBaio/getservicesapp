import React, { useEffect } from "react";
import {
  Text,

  HStack,
  Center,
  Pressable,
} from "native-base";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useScreen } from "../stores/screen";
import { colors } from "../Styles/theme";
import { useCounterClickAd } from "../stores/CounterClickAd";
import { AdEventType, InterstitialAd, TestIds } from "react-native-google-mobile-ads";
import { Platform } from "react-native";

interface MyTabBarProps {
  initialScreen: number;
  navigation: any;
}

const verifyPlatform = () => {
  if (Platform.OS === 'ios') {
    return 'ca-app-pub-9674908168811233~6322324593'
  } else if (Platform.OS === 'android') {
    return 'ca-app-pub-9674908168811233~5829755601'
  }
}

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : verifyPlatform();
const interstitial = InterstitialAd.createForAdRequest(adUnitId);

export function MyTabBar({ navigation, initialScreen = 0 }: MyTabBarProps) {
  const { screen = initialScreen, setScreen } = useScreen((state) => state);

  const { setClicks, clicks } = useCounterClickAd(state => state)

  useEffect(() => {
    
    const eventListener = interstitial.addAdEventListener((AdEventType.LOADED || AdEventType.CLOSED), type => {
      if (type === AdEventType.LOADED) {
        console.log("ad loaded");
        interstitial.show();
      }
      if (type === AdEventType.CLOSED) {
        console.log("ad closed");

        //reload ad 
        interstitial.load();
      }
    });

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };
  }, [clicks]);

  const selectScreen = (page: number, screen: string) => {
    setScreen(page)
    if (clicks >= 2) {
      interstitial.show();
      setClicks(0)
    } else {

      setClicks(clicks + 1)
    }
    navigation.navigate(screen)
  }

  return (
    <>
      <HStack bg="white" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          opacity={screen == 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => {
            selectScreen(0, 'HomeScreen');
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
            selectScreen(1, 'Search');
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
            selectScreen(2, 'Profile');
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
