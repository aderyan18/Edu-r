import react from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR} from '../Styles/color';

import Login from '../View/Login';
import Home from '../View/Home';
import Search from '../View/Search';
import Library from '../View/Library';
import Account from '../View/Account/index.js';
import SplashScreen from '../View/SplashScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

// Bottom Navigation

function MainScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={wp(5)}
              color={focused ? COLOR.BLUE : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="search"
              size={wp(5)}
              color={focused ? COLOR.BLUE : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="user"
              size={wp(5)}
              color={focused ? COLOR.BLUE : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const NavigationRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SplashScreen">
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationRoutes;
