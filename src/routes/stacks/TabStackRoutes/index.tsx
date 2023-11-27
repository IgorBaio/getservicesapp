import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useRef } from 'react';
import { AppState } from 'react-native';
import { MyTabBar } from '../../tab-bar';
import { HomeScreen } from '../../../pages/Home';
import SearchScreen from '../../../pages/Search';
import ProfileScreen from '../../../pages/Profile';
import { useUser } from '../../../stores/User';

const Tab = createBottomTabNavigator()

export function TabStackRoutes(){
    const appState = useRef(AppState.currentState);
    const {user} = useUser(state => state)

    const verifyIfUserFinishRegister = ()=> {
        //TODO integrate firestore e verificar o usuario no banco
        

        return user.displayName  && 
        user.phoneNumber && 
        user.photoURL && 
        user.services && 
        user.country &&
        user.description 

    }

    return (
        <Tab.Navigator
        backBehavior='history'
        tabBar={(props)=> <MyTabBar {...props} />}
        initialRouteName={verifyIfUserFinishRegister() ? 'HomeScreen' : 'Profile'}
        screenOptions={{tabBarHideOnKeyboard: true}}
        >
            <Tab.Screen 
            options={{
                headerShown: false
            }}
            name='HomeScreen'
            component={HomeScreen}
            />
            <Tab.Screen 
            options={{
                headerShown: false
            }}
            name='Search'
            component={SearchScreen}
            />
            <Tab.Screen 
            options={{
                headerShown: false
            }}
            name='Profile'
            component={ProfileScreen}
            />

        </Tab.Navigator>
    )
}