import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import api from "../api/api.js";
import Toast from "react-native-toast-message";

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
            if (error) {
              console.log("Erro ao buscar usuário");
            }
          }
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        if (error) {
          console.log("Algo aconteceu, tente novamente mais tarde");
        }
      }
    };

    getTokenAndUserId();
  }, []);

  const updateUser = async () => {
    try {
      const response = await api.get(`usuarios/${id}`);
      setUser(response.data);
    } catch (error) {
      if (error) {
        console.log("Erro ao buscar usuário");
      }
    }
  };

  const register = async (user) => {
    try {
      await api.post("usuarios/registrar", user).then((response) => {
        return response.data;
      });

      navigation.navigate("Login");
    } catch (error) {
      if (error) {
        Toast.show({
          type: "error",
          text1: "Erro ao registrar",
          text2: "Não foi possível se registrar, tente novamente mais tarde",
        });
      }
    }
  };

  const login = async (user) => {
    try {
      const data = await api.post("usuarios/login", user).then((response) => {
        return response.data;
      });
      await authUser(data);
    } catch (error) {
      if (error) {
        Toast.show({
          type: "error",
          text1: "Erro no login",
          text2:
            "Não foi possível realizar o login, tente novamente mais tarde",
        });
      }
    }
  };

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
      if (error) {
        Toast.show({
          type: "error",
          text1: "Erro ao apagar a conta",
          text2:
            "Não foi possível apagar sua conta, tente novamente mais tarde",
        });
      }
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
        console.log("Falha ao autenticar usuário");
      }
    } catch (error) {
      if (error) {
        console.log("Algo aconteceu, tente novamente mais tarde");
      }
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
