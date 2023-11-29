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
import { db, firebaseConfig } from '../../firebaseConfig';
import { initializeApp } from 'firebase/app';
import { useUser } from '../stores/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, getDocs } from 'firebase/firestore';

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
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackRoutes() {
  // const {isRouteNeedLogged} = useAppSelector(state=> state.needLogged)
  const [loading, setLoading] = useState(false);
  const [uid, setUid] = useState<string>();
  const { screen } = useScreen((state) => state);
  const { user, setUser } = useUser((state) => state);

  const getUserByDB = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    console.log('querySnapshot.docs', querySnapshot.docs[0].data())
    const userByDb = querySnapshot.docs?.find((doc) => doc.data().uid === user.uid);
    console.log('userByDb', userByDb?.data())
    console.log('userByDb?.data()', userByDb?.data().id)
    setUid(userByDb?.data()?.uid)
    setUser(userByDb?.data())
    // return 
  }


  useEffect(() => {
    // console.log('\n\n\n\n\n')
    // console.log('user.uid', user.uid)
    // console.log('uid', uid)
    // console.log('\n\n\n\n\n')
    if (user.uid && user.uid !== uid) {
       getUserByDB()
      //  console.log('userByDb', userByDb)


      setUid(user.uid)
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