import { View, useEffect } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native"; // Tambahkan ini
import React from "react";
import Main from "../../screens/Main";
import Login from "../../screens/Login";
import Register from "../../screens/Register";
import Profile from "../../screens/Profile";
import Performance from "../../screens/Performance";
import Task from "../../screens/Task";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
      screenListeners={{
        state: (e) => {
          console.log(JSON.stringify(e, null, 2));
        },
      }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Task" component={Task} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Performance" component={Performance} />
    </Stack.Navigator>
  );
}
