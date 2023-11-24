import React, { useState } from "react";
import { StatusBar } from "react-native";
import Routes from "./src/routes";
import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./src/context/UserContext.jsx";

const App = () => {
  const [statusBarColor] = useState("black");

  return (
    <NavigationContainer>
      <UserProvider>
        <StatusBar translucent={true} barStyle={statusBarColor} />
        <Routes />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
