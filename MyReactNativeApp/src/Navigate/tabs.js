import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "./../pantalla/home/component/home";
import NotificationsScreen from "./../pantalla/notificacion/component/notification";
//import Profile from "./../pantalla/profile/component/profile";
import { createStackNavigator } from '@react-navigation/stack';
import DetalleHomeScreen from "./../pantalla/home/component/detallehome";
import DetalleNotiScreen from '../pantalla/notificacion/component/detalleNoti';
import Icon from 'react-native-vector-icons/Ionicons';


//const WebStack= createStackNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const DetailsNotiStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

function  MyTabs() {
  return ( 
    <Tab.Navigator
      initialRouteName="Vehiculos Livianos"
      activeColor="#fafafa"
      barStyle={{ backgroundColor: "#1246ff" }}
    >
      <Tab.Screen
        name="Vehiculos Livianos"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Vehiculos Livianos',
          tabBarIcon: ({ color }) => (
            <Icon name="heart" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Vehiculos Pesados"
        component={NotificationsStackScreen}
      options={{
          tabBarLabel: 'Vehiculos Pesados',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-people" color={color} size={20} />     
               ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;

  const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#1246ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
    }}>
          <HomeStack.Screen name="Home" component={HomeScreen} options={{
             title:'Vehiculo Liviano'
              /*headerLeft: () => (
              <Icon.Button name="ios-car" size={25} backgroundColor="#AB2F74" onPress={() => navigation.openDrawer()}></Icon.Button>
              )*/
          }} />
          <DetailsStack.Screen name="Detalle" component={DetalleHomeScreen} options={{
             /* headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer('HomeStackScreen')}></Icon.Button>
              )*/
          }} />
         
    
    </HomeStack.Navigator>
  );

  const NotificationsStackScreen = ({navigation}) => (
    <NotificationsStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#1246ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
    }}>
         <HomeStack.Screen name="noti" component={NotificationsScreen} options={{
          title:'Vehiculo Pesado'
          /*headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#AB2F74" onPress={() => navigation.openDrawer()}></Icon.Button>
              )*/
          }} />

          <DetailsNotiStack.Screen name="Detalle" component={DetalleNotiScreen} options={{
               /* headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
                )*/
          }}/>
    </NotificationsStack.Navigator>
  );
