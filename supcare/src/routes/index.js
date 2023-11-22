import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/auth/login";
import Register from "../screens/auth/register";
import OnBoard from "./../screens/onBoard";
import HealthForm from "../screens/private/health/healthForm";
import Health from "../screens/private/health";
import Home from "../screens/private/home";
import Profile from "../screens/private/profile";
import Strategies from "../screens/private/strategies";
import Menu from "../components/menu";

import { Context } from "../context/UserContext.jsx";
import Password from './../screens/auth/register/password';
const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HealthForm"
        component={HealthForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Strategies"
        component={Strategies}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Health"
        component={Health}
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

const AuthRoutes = () => {
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
        name="Password"
        component={Password}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Routes = () => {
  const { isAuthenticated } = useContext(Context);

  return (
    <>
      {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
      {isAuthenticated && <Menu />}
    </>
  );
};

export default Routes;
