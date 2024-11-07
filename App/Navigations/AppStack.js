
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import Home from '../Screens/Home/Home';
import BottomTab from './BottomTab';
import SingleScreen from '../Screens/Single/SingleScreen';
import AddEvent from '../Screens/Single/AddEvent';


const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="SingleScreen" component={SingleScreen} />
      <Stack.Screen name="AddEvent" component={AddEvent} />

    </Stack.Navigator>
  );
};

export default AppStack;
