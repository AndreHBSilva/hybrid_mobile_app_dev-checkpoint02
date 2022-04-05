import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from '../screens/Login'
import HomeScreen from '../screens/Home'

const Stack = createNativeStackNavigator()

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName = "Login">
            <Stack.Screen name="Login" component={LoginScreen}
                options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={HomeScreen}
                options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}