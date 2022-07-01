import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "./../pantalla/home/component/home";
import Notifications from "./../pantalla/notificacion/component/notification";
import Profile from "./../pantalla/profile/component/profile";

const Tab = createMaterialBottomTabNavigator();

function  MyTabs() {
  return ( 
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fafafa"
      barStyle={{ backgroundColor: 'blue' }}
    >
      <Tab.Screen
        name="Vehiculos Livianos"
        component={Home}
        options={{
          tabBarLabel: 'Vehiculos Livianos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={20} />
          ),
        }}
        
      />
      <Tab.Screen
        name="Vehiculos Pesados"
        component={Notifications}
      options={{
          tabBarLabel: 'Vehiculos Pesados',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={20} />
          ),
        }}
      />
   
    </Tab.Navigator>
  );
}
export default MyTabs;