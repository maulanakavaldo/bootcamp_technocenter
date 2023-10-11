import { View, Image, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Text from "../../components/Text";
import React, { useState } from "react";
import Home from "../Home";
import Profile from "../Profile/index.js";
import Performance from "../Performance";
import Task from "../Task";
import IMAGES from "../../assets/images";
import CreateTask from "../Task/CreateTask";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

export default function Main({ navigation, params }) {
  const focusIcon = {
    Home: IMAGES.ic_home,
    Profile: IMAGES.ic_profile,
    Performance: IMAGES.ic_perform,
    Task: IMAGES.ic_task,
  };

  const unFocusIcon = {
    Home: IMAGES.ic_home_inactive,
    Profile: IMAGES.ic_profile_inactive,
    Performance: IMAGES.ic_perform_inactive,
    Task: IMAGES.ic_task_inactive,
    CreateTask: IMAGES.ic_create_task,
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#04325F",
        tabBarInactiveTintColor: "#CED1D4",
        tabBarIcon: ({ focused, color }) => {
          const iconSize = route.name !== "CreateTask" ? 24 : 86;
          return (
            <View>
              <Image
                source={
                  focused ? focusIcon[route.name] : unFocusIcon[route.name]
                }
                style={{
                  width: iconSize,
                  height: iconSize,
                  marginBottom: route.name !== "CreateTask" ? 0 : 33,
                }}
                resizeMode="contain"
              />
            </View>
          );
        },
        tabBarLabel: ({ focused, color }) => (
          <Text semiBold={focused} fontSize={10} color={color}>
            {route.name !== "CreateTask" ? route.name : ""}
          </Text>
        ),
        tabBarStyle: {
          paddingTop: 10,
          paddingBottom: 10,
          height: 70,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Task" component={Task} />
      <Tab.Screen
        name="CreateTask"
        component={CreateTask}
        options={{ tabBarStyle: { display: "none" } }}
      />
      <Tab.Screen name="Performance" component={Performance} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
