import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Import screens
import LoginScreen from './screens/LoginScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import AddScreen from './screens/AddScreen';
import HeartScreen from './screens/HeartScreen';
import ProfileScreen from './screens/ProfileScreen';
import LikedPnmScreen from './screens/LikedPnmScreen';
import HomeScreenRecruiter from './screens/HomeScreenRecruiter';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabRecruiter() {
  return (
    <Tab.Navigator
    screenOptions={{
      showLabel:false,
    }}
    >
      <Tab.Screen
      name="Home"
      component={HomeScreenRecruiter}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name = "home" color={color} size={size} />
        ),
        headerShown: false,
      }}
      />
    <Tab.Screen
    name="LikedPnmScreen"
    component={LikedPnmScreen}
    options={{
      tabBarIcon: ({color, size}) => (
        <Icon name="heart" color = {color} size = {size}/>
      ),
      headerShown:false,
    }} 
    />
    </Tab.Navigator>
  )
}

function HomeTabRecruit() {
    return (
      <Tab.Navigator
        screenOptions={{
          showLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="add-circle-outline" color={color} size={size} />
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
  const [userRole, setUserRole] = useState(null); // Initialize user role state

  useEffect(() => {
    setUserRole('recruiter');
  }, []);

  return (
    <NavigationContainer>
      {userRole === 'recruiter' ? (
        <HomeTabRecruiter />
      ) : userRole === 'recruit' ? (
        <HomeTabRecruit />
      ) : (
        // Default view (e.g., Login or Loading Screen)
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
          {/* Other screens as needed */}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
