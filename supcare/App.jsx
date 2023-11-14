import React, { useState } from "react";
import { StatusBar } from "react-native";
import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  const [statusBarColor] = useState("black");

  return (
    <NavigationContainer>
      <StatusBar translucent={true} barStyle={statusBarColor} />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
