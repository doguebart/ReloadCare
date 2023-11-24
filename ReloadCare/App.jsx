import React, { useState } from "react";
import { StatusBar } from "react-native";
import Routes from "./src/routes";
import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./src/context/UserContext.jsx";

// Integrantes

// rm94265 | Daniel Ferreira dos Santos - 2TDST
// rm94269 | Douglas Welber - 2TDSS
// rm88383 | Felipe Jardim - 2TDST
// rm95749 | João Vitor Braz - 2TDST
// rm94717 | Tarcisio Ferreira Couto - 2TDST

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
