import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../Components/SplashScreen';
import SignInScreen from '../Components/SignInScreen';
import SignUpScreen from '../Components/SignUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;