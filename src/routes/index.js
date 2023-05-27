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
import splashScreen from '../View/SplashScreen';
import Home from '../View/Home';
import Search from '../View/Search';
import Library from '../View/Library';
import Account from '../View/Account/index.js';
// cuki tes kah
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
      activeColor={COLOR.BLUE}
      shifting={false}
      initialRouteName="Home"
      headerShown={false}
      barStyle={{backgroundColor: '#F3F2F2'}}>
      <Tab.Screen
        name="Main"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={hp(3)}
              color={focused ? COLOR.PRIMARY : 'gray'}
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
              name="inbox"
              size={hp(3)}
              color={focused ? COLOR.PRIMARY : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="book"
              size={hp(3)}
              color={focused ? COLOR.PRIMARY : 'gray'}
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
              size={hp(3)}
              color={focused ? COLOR.PRIMARY : 'gray'}
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
        <Stack.Screen name="SplashScreen" component={splashScreen} />
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Home" component={MainScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationRoutes;
