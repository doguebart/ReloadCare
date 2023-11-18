import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/auth/login";
import Register from "../screens/auth/register";
import OnBoard from "./../screens/onBoard";
import Health from "../screens/private/health";
import Home from "../screens/private/home";
import Profile from "../screens/private/profile";

import Header from "../components/header";
import Menu from "../components/menu";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoard"
        component={OnBoard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Health"
        component={Health}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
