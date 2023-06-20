import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import NewMarker from "../screens/NewMarker";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MarkerList from "../screens/MarkerList";
import EditMarker from "../screens/EditMarker";
import Directions from "../screens/Directions";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();
export const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
            <Stack.Screen name="NewMarker" component={NewMarker} />
        </Stack.Navigator>
    );
}

const MarkerListStack = createNativeStackNavigator();
export const MarkerListStackNavigation = () => {
    return (
        <MarkerListStack.Navigator>
            <MarkerListStack.Screen name="MarkerList" component={MarkerList} options={{headerShown:false}} />
            <MarkerListStack.Screen name="EditMarker" component={EditMarker} />
        </MarkerListStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
export const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="MarkerList" component={MarkerListStackNavigation} />
                <Tab.Screen name="Home" component={StackNavigation} options={{headerShown:false}} />
                <Tab.Screen name="Directions" component={Directions} options={{headerShown:false}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}