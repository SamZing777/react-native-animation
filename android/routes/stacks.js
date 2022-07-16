import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/home';
import UsingEffect from '../screens/translate/usingEffect';


const Stack = createNativeStackNavigator();

const ScreenStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Using Effect" component={UsingEffect} />
        </Stack.Navigator>
    )
}

export default ScreenStack;
