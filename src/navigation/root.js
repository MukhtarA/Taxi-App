import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeNavigator from './HomeNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';

const DrawerMenuItem = (props) => (
  <View style={{flex: 1}}>
    <Text>{props.name}</Text>
  </View>
);
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const RootNavigation = (props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="Your trips">
          {() => <DrawerMenuItem name={'Your trips'} />}
        </Drawer.Screen>
        <Drawer.Screen name="Help">
          {() => <DrawerMenuItem name={'Help'} />}
        </Drawer.Screen>
        <Drawer.Screen name="Wallet">
          {() => <DrawerMenuItem name={'Wallet'} />}
        </Drawer.Screen>
        <Drawer.Screen name="Settings">
          {() => <DrawerMenuItem name={'Settings'} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
