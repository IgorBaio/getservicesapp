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
import { firebaseConfig } from '../../firebaseConfig';
import { initializeApp } from 'firebase/app';
import { useUser } from '../stores/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackRoutes() {
  // const {isRouteNeedLogged} = useAppSelector(state=> state.needLogged)
  const {setUser} = useUser(state => state)


  // const email = "teste@email3.com"
  // const password = "123456"

  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app);
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     console.log('userCredential', userCredential)
  //     console.log('user', user)
  //     setUser(user)
  //     AsyncStorage.setItem('@user', JSON.stringify(user))
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });


  const [loading, setLoading] = useState(false);
  const [uid, setUid] = useState<string>();
  const { screen } = useScreen((state) => state);
  const { user } = useUser((state) => state);


  useEffect(() => {
    if(user.uid){
      setUid(user.uid)
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