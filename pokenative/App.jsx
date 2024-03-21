import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PokemonHome from './screens/PokemonHome'
import PokemonDetails from './screens/PokemonDetails'
import PokemonCollection from './screens/PokemonCollection'


const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='PokemonHome' component={PokemonHome} options={{headerShown: false}}/>
            <Stack.Screen name='PokemonDetails' component={PokemonDetails} />
            <Stack.Screen name='PokemonCollection' component={PokemonCollection}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})