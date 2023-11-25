import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useRef } from 'react';
import { AppState } from 'react-native';
import { MyTabBar } from '../../tab-bar';
import { HomeScreen } from '../../../pages/Home';
import SearchScreen from '../../../pages/Search';
import ProfileScreen from '../../../pages/Profile';

const Tab = createBottomTabNavigator()

export function TabStackRoutes(){
    const appState = useRef(AppState.currentState);

    return (
        <Tab.Navigator
        backBehavior='history'
        tabBar={(props)=> <MyTabBar {...props} />}
        initialRouteName='HomeScreen'
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