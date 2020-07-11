import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome, FontAwesome5} from '@expo/vector-icons';

import Home from './Pages/Home';
import AddExpense from './Pages/AddExpense';
import Settings from './Pages/Settings';
import Profile from './Pages/Profile';
import Login from './Pages/Login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigation = () => (
    <Tab.Navigator
        tabBarOptions={{
            style: {
                backgroundColor: '#30b8a6',
                borderTopColor: 'rgba(255, 255, 255, 0.2)',
                height: 60,
                paddingBottom: 5,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
            },
            activeTintColor: '#fff',
            inactiveTintColor: 'rgba(255,255,255, 0.8)'
        }}
    >
        <Tab.Screen 
            name="Expenses" 
            component={ Home }
            options={{
                tabBarLabel: () => { return null },
                tabBarIcon: () => <FontAwesome5 name="money-bill" size={34} color="white" />
            }}
        />
        <Tab.Screen 
            name="AddExpense" 
            component={ AddExpense }
            options={{
                tabBarLabel: () => { return null },
                tabBarIcon: () => <AntDesign name="pluscircle" size={84} color="#e9c33e" />
            }}
        />
        <Tab.Screen 
            name="Profile" 
            component={ Profile }
            options={{
                tabBarLabel: () => { return null },
                tabBarIcon: () => <FontAwesome name="user" size={34} color="white" />
            }}
        />
    </Tab.Navigator>
)

const Navigation = () => (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={ Login } options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={ BottomNavigation } options={{ headerShown: false }}/>
    </Stack.Navigator>
)

export default Navigation;