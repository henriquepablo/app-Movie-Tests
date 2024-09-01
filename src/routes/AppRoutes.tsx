import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home/Home";
import { HomeIcon } from "lucide-react-native";
import PageSelected from "../components/Page/PageSelected";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs():JSX.Element {

    return(
        <Tab.Navigator 
            screenOptions={
                {
                    headerShown: false,

                    tabBarStyle: {
                        backgroundColor: '#292B37'
                    },
                
                    tabBarShowLabel: false
                }
        }>
            <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon: ({size, color}) => {
                        return <HomeIcon size={size} color={color} />
                    }
                }}
            />
        </Tab.Navigator>
    );
}


function AppRoutes():JSX.Element {

    

    return(
       <NavigationContainer >
            <Stack.Navigator screenOptions={
                {
                    headerShown: false,
                    
                }
        }>
                <Stack.Screen name="HomeTabs" component={HomeTabs}/>
                <Stack.Screen name="PageSelected" component={PageSelected}/>
            </Stack.Navigator>
       </NavigationContainer>
    );  
}

export default AppRoutes;