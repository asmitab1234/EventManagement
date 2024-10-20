import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './App/Navigations/AuthStack';
import AppStack from './App/Navigations/AppStack';


const Stack = createStackNavigator();

const App = () => {

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
              <Stack.Navigator
                initialRouteName="AuthStack"
                screenOptions={{
                  headerShown: false
                }}
              >

                <Stack.Screen name="AuthStack" component={AuthStack} />
                <Stack.Screen name="AppStack" component={AppStack} />

              </Stack.Navigator>
            </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})