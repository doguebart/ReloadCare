import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/auth/login";

const Stack = createStackNavigator();

const Router = () => {
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    ></Stack.Screen>
  </Stack.Navigator>;
};

export default Router;
