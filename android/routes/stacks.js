import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/home';


const Stack = createNativeStackNavigator();

const ScreenStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default ScreenStack;
