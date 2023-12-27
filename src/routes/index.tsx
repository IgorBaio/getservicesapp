import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useRef, useState } from 'react';
import Preload from '../pages/Preload';
import { TabStackRoutes } from './stacks/TabStackRoutes';
import { useDispatch } from 'react-redux';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { useCurrentRoute } from '../stores';
import { AppState } from 'react-native';
import { useScreen } from '../stores/screen';
import { RegisterStackScreen } from './stacks/RegisterStackScreen';
import { useUser } from '../stores/User';
import { getAllProfessionalsUsers, getUserByDB } from '../services/firebase';
import ProfessionalDetails from '../pages/ProfessionalDetails';

export type RootStackParamList = {
  HomeScreen: undefined;
  SplashScreen: undefined;
  Search: undefined;
  TabRoutes: {
    screen?: string;
  };
  LoginStackScreen: {
    screen?: string;
  };
  LoginScreen: undefined;
  RegisterScreen: undefined;
  DetailsScreen: {
    uid: string
  }
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackRoutes() {
  const [loading, setLoading] = useState(false);
  const { screen } = useScreen((state) => state);
  const { user, setUser, setUsers, uid, setUid } = useUser((state) => state);

  useEffect(() => {
    console.log('\n\n\n\n\n')
    console.log('user.uid', user.uid)
    console.log('uid', uid)
    console.log('\n\n\n\n\n')
    if (user?.uid && user?.uid !== uid) {
       getUserByDB()
      getAllProfessionalsUsers().then((users) => {
        const usersFiltredDifferentByMe = users.filter((professional) => professional.uid !== user.uid)
        setUsers(usersFiltredDifferentByMe)
      }
     ).catch((err) => {
     })
    }
    else if(!user.uid) {
      setUid('')
    }
  }, [user]);

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
        initialRouteName={uid ? "TabRoutes" : "LoginStackScreen"}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          orientation: 'portrait_up',
        }}>

        {!uid ? (

          <>
            <Stack.Screen name="LoginStackScreen" component={RegisterStackScreen} />
          </>
        ) :
          (
            <>
              <Stack.Screen name="TabRoutes" component={TabStackRoutes} />
            </>
          )
        }
        <Stack.Screen name="DetailsScreen" component={ProfessionalDetails} />

      </Stack.Navigator >
    </>
  );
}

function AppRoutes() {
  const dispatch = useDispatch();
  const navigationRef = useNavigationContainerRef();
  const [loading, setLoading] = useState(true);

  navigationRef.addListener('state', () => {
    const { setRouteName } = useCurrentRoute.getState();
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