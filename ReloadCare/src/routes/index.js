import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Context } from "../context/UserContext.jsx";

import Login from "../screens/auth/login";
import Register from "../screens/auth/register";
import OnBoard from "./../screens/onBoard";
import Health from "../screens/private/health";
import Home from "../screens/private/home";
import Profile from "../screens/private/profile";
import Strategies from "../screens/private/strategies";
import Menu from "../components/menu";
import Password from "./../screens/auth/register/password";
import Saude from "./../screens/private/health/healthForm/saude";
import SaudeMental from "../screens/private/health/healthForm/saudeMental";
import Substancias from "../screens/private/health/healthForm/substanciasFrequencia";
import Goals from "./../screens/private/health/healthForm/goals";

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Saude"
        component={Saude}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SaudeMental"
        component={SaudeMental}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Substancias"
        component={Substancias}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Goals"
        component={Goals}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Strategies"
        component={Strategies}
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
