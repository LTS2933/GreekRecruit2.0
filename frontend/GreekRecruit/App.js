import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; 


import LoginScreen from './screens/LoginScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import HomeScreen from './screens/HomeScreen';
import HeartScreen from './screens/HeartScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        "tabBarShowLabel": false,
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Heart"
        component={HeartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
        <Stack.Screen name="Home" component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;