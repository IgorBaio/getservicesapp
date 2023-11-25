import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useRef, useState} from 'react';
import Preload from '../pages/Preload';
import {TabStackRoutes} from './stacks/TabStackRoutes';
import {useDispatch} from 'react-redux';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import {useCurrentRoute} from '../stores';
import { AppState } from 'react-native';
import { useScreen } from '../stores/screen';

export type RootStackParamList = {
  HomeScreen: undefined;
  SplashScreen: undefined;
  Search: undefined;
  TabRoutes: {
    screen?: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackRoutes() {
  // const {isRouteNeedLogged} = useAppSelector(state=> state.needLogged)
  const [loading, setLoading] = useState(false);
  const { screen } = useScreen((state) => state);

  if (loading) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          orientation: 'portrait_up',
        }}
        initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={Preload} />
      </Stack.Navigator>
    );
  }

  return (
    <>
      <Stack.Navigator
        initialRouteName="TabRoutes"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          orientation: 'portrait_up',
        }}>
        <>
          <Stack.Screen name="TabRoutes" component={TabStackRoutes} />
        </>
      </Stack.Navigator>
    </>
  );
}

function AppRoutes() {
  const dispatch = useDispatch();
  const navigationRef = useNavigationContainerRef();
  const [loading, setLoading] = useState(true);

  navigationRef.addListener('state', () => {
    const {setRouteName} = useCurrentRoute.getState();
    const currentRoute = navigationRef.getCurrentRoute()?.name ?? ''
    setRouteName(currentRoute)

    //TODO fazer a parte de color
  });

  const appState = useRef(AppState.currentState);

  return (
    <NavigationContainer
    ref={navigationRef}
    
    >
        <StackRoutes />
    </NavigationContainer>
  )

}

export default AppRoutes;