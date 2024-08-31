import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs():JSX.Element {

    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
        </Tab.Navigator>
    );
}


function AppRoutes():JSX.Element {

    

    return(
       <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeTabs" component={HomeTabs}/>
            </Stack.Navigator>
       </NavigationContainer>
    );  
}

export default AppRoutes;