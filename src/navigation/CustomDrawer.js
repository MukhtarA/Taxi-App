import React from 'react';
import {View, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          backgroundColor: '#000000',
          padding: 15,
        }}>
        {/* User row */}
        <View
          style={{
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#aba0a0',
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 10,
            }}
          />
          <View>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                marginBottom: 5,
              }}>
              Abulmansur Mukhtar
            </Text>
            <Text
              style={{
                color: '#929292',
              }}>
              5.00 ★
            </Text>
          </View>
        </View>
        {/* Messages row */}
        <View
          style={{
            borderBottomWidth: 0.5,
            borderTopWidth: 0.5,
            borderColor: '#ababab',
            paddingVertical: 5,
            marginVertical: 10,
          }}>
          <Pressable
            style={{
              backgroundColor: '#000000',
            }}
            onPress={() => {
              console.warn('Messages');
            }}>
            <Text
              style={{
                color: '#ffffff',
                paddingVertical: 10,
                fontSize: 16,
              }}>
              Messages
            </Text>
          </Pressable>
        </View>
        {/* Do more */}
        <Pressable
          onPress={() => {
            console.warn('Do more');
          }}>
          <Text style={{color: '#b3b2b2', paddingVertical: 5}}>
            Do more with your account
          </Text>
        </Pressable>
        {/* Make money */}
        <Pressable
          onPress={() => {
            console.warn('Make money');
          }}>
          <Text style={{color: '#ffffff', paddingVertical: 5}}>
            Make money driving
          </Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
