import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MarkerList from "../screens/MarkerList";
import Directions from "../screens/Directions";
import { NavigationContainer } from "@react-navigation/native";
import HomeIcon from "../components/HomeIcon";
import MarkerListIcon from "../components/MarkerListIcon";
import DirectionIcon from "../components/DirectionIcon";
import { View } from "react-native";



const Tab = createBottomTabNavigator();
export const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {      
                  if (route.name === 'Home') {
                    return (<View>
                        <HomeIcon />
                        </View>)
                  } else if (route.name === 'MarkerListScreen') {
                    return (<View>
                        <MarkerListIcon />
                        </View>);
                  }
                  else if(route.name === 'Directions'){
                    return (<View>
                        <DirectionIcon />
                        </View>);
                  }
                  else{
                    return (<View>
                        <HomeIcon />
                        </View>);

                  }
      
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
              })}>
                <Tab.Screen name="MarkerListScreen" component={MarkerList} options={{headerShown:false}}/>
                <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
                <Tab.Screen name="Directions" component={Directions} options={{headerShown:false}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}