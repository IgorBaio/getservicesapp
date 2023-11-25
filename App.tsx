/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useRef, type PropsWithChildren, useEffect } from "react";
import {
  AppState,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import Toast, { BaseToastProps } from "react-native-toast-message";
import SplasScreen from "react-native-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./src/app/store";
import AppRoutes from "./src/routes";
import { ThemeProvider } from "@react-navigation/native";
import theme from "./src/Styles/theme";
import { NativeBaseProvider } from "native-base";

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const configToast = {
  //   success: (props: BaseToastProps) => ToastSuccess(props)
  // }//TODO fazer toast depois

  const appState = useRef(AppState.currentState);

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
