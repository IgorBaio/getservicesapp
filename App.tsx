/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useRef } from "react";
import {
  AppState,
  StyleSheet,
  useColorScheme,
} from "react-native";

import {
  Colors,
} from "react-native/Libraries/NewAppScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./src/app/store";
import AppRoutes from "./src/routes";
import { ThemeProvider } from "@react-navigation/native";
import theme from "./src/Styles/theme";
import { NativeBaseProvider } from "native-base";
import mobileAds, { MaxAdContentRating } from 'react-native-google-mobile-ads';

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const configToast = {
  //   success: (props: BaseToastProps) => ToastSuccess(props)
  // }//TODO fazer toast depois

  const appState = useRef(AppState.currentState);


  mobileAds()
    .setRequestConfiguration({
      // Update all future requests suitable for parental guidance
      maxAdContentRating: MaxAdContentRating.PG,

      // Indicates that you want your content treated as child-directed for purposes of COPPA.
      tagForChildDirectedTreatment: true,

      // Indicates that you want the ad request to be handled in a
      // manner suitable for users under the age of consent.
      tagForUnderAgeOfConsent: true,

      // An array of test device IDs to allow.
      testDeviceIdentifiers: ['EMULATOR'],
    })
    .then(() => {
      // Request config successfully set!
    });

  // useEffect(() => {
  //   SplasScreen.hide();

  //   // const subscription = AppState.addEventListener('change', (nextAppState)=>{
  //   //   appState.current = nextAppState
  //   //   if(appState.current === 'active' && JailM)
  //   // })
  // }, []);

  return (
    <SafeAreaProvider>
      {/* <SafeAreaView style={backgroundStyle}> */}
      {/* <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <NativeBaseProvider>
            <AppRoutes />
          </NativeBaseProvider>

          {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}
          >
          
        </ScrollView> */}
          {/* </SafeAreaView> */}
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
