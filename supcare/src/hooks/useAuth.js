import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import api from "../api/api.js";

const useAuth = () => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    const getTokenAndUserId = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const userId = await AsyncStorage.getItem("userId");

        setId(userId);

        if (token) {
          api.defaults.headers.authorization = `Bearer ${JSON.parse(token)}`;
          setIsAuthenticated(true);
          setIsLoading(false);

          try {
            const response = await api.get(`usuarios/${userId}`);
            setUser(response.data);
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getTokenAndUserId();
  }, []);

  const updateUser = async () => {
    try {
      const response = await api.get(`usuarios/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching updated user data:", error);
    }
  };

  const register = async (user) => {
    try {
      await api.post("usuarios/registrar", user).then((response) => {
        return response.data;
      });

      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (user) => {
    try {
      const data = await api.post("usuarios/login", user).then((response) => {
        return response.data;
      });
      await authUser(data);
    } catch (error) {
      console.log(error);
      if (error.response.data.status === 403) {
        console.log("Incorrect Username or Password!");
      }
    }
  };

  // const edit = async (user) => {
  //   try {
  //     const data = await api.put(`usuarios/${id}`, user).then((response) => {
  //       return response.data;
  //     });
  //     await AsyncStorage.setItem("userId", JSON.stringify(data.id));
  //     setIsAuthenticated(true);
  //     navigation.navigate("Home");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const del = async (userId) => {
    try {
      await api.delete(`usuarios/${userId}`).then((response) => {
        return response.data;
      });
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("userId");
      setIsAuthenticated(false);
      navigation.navigate("Register");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const authUser = async (data) => {
    try {
      if (data && data.token && data.id) {
        await AsyncStorage.setItem("token", JSON.stringify(data.token));
        await AsyncStorage.setItem("userId", JSON.stringify(data.id));
        setIsAuthenticated(true);
        navigation.navigate("Home");
      } else {
        console.log("Invalid data received for authentication");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    setIsAuthenticated(false);
    await AsyncStorage.removeItem("token");
    api.defaults.headers.authorization = undefined;

    navigation.navigate("Login");
  };

  return {
    isAuthenticated,
    isLoading,
    user,
    updateUser,
    register,
    login,
    del,
    logout,
  };
};

export default useAuth;
