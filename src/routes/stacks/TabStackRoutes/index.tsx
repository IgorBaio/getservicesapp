import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTabBar } from '../../tab-bar';
import { HomeScreen } from '../../../pages/Home';
import SearchScreen from '../../../pages/Search';
import ProfileScreen from '../../../pages/Profile';
import { useUser } from '../../../stores/User';

const Tab = createBottomTabNavigator()

export function TabStackRoutes() {
    const { user } = useUser(state => state)
    const verifyIfUserFinishRegister = () => {

        const isRegisterEnded = user.displayName &&
            user.phoneNumber &&
            user.photoURL &&
            user.services &&
            user.country &&
            user.description

        return isRegisterEnded
    }

    return (
        <Tab.Navigator
            backBehavior='history'
            tabBar={(props) => <MyTabBar {...props} initialScreen={verifyIfUserFinishRegister() ? 0 : 2} />}
            initialRouteName={verifyIfUserFinishRegister() ? 'HomeScreen' : 'Profile'}
            screenOptions={{ tabBarHideOnKeyboard: true }}
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