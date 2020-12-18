import React from "react";
import { Button, View, Text, StyleSheet } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'



import LoginScreen from "./app/screens/LoginScreen";
import Screen from './app/components/Screen'


const HomeScreen = ({ navigation }) => (
  <Screen>
    <Text>Home Screen</Text>
    <Button 
      title="View Tweet Detail"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  </Screen>
)

const TweetDetails = ({ navigation, route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
    <Link />
  </Screen>
)

const Link = () => {
  const navigation = useNavigation()

  return (
    <Button 
      title="Click"
      onPress={() => navigation.navigate("Home")}
    />
  )
}

const Account = () => (
  <Screen>
    <Text>Accounts</Text>
  </Screen>
)

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name ="Feed" component={HomeScreen} />
    <Tab.Screen name ="Account" component={Account} />
  </Tab.Navigator>
)

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
        screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen 
        name="TweetDetails" 
        component={TweetDetails}
        options={({ route }) => ({ 
          title: route.params.id
          })}
        />
      </Stack.Navigator>
)

export default function App() {
  return (
    <Screen>
       <LoginScreen />  
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: "#fff"
  }
});