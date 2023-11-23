import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  UserContainer,
  IconContainer,
  TextContainer,
  Title,
  Text,
} from "./styles";
import { Context } from "../../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import api from "../../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const Header = () => {
  const navigation = useNavigation();
  const { user, updateUser, logout } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        const token = await AsyncStorage.getItem("token");

        if (userId && token) {
          api
            .get(`usuarios/${userId}`, {
              headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
              },
            })
            .then((response) => {
              updateUser(response.data);
            })
            .catch((error) => {
              console.error("Error fetching user data:", error);
            });
        }
      } catch (error) {
        console.error("Error reading AsyncStorage:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    updateUser();
  }, [user]);

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  const handleLogout = () => {
    Alert.alert(
      "Confirmação",
      "Tem certeza que deseja sair da sua conta?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sair",
          onPress: () => {
            logout();
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Container>
      <UserContainer onPress={goToProfile}>
        <Icon name="user" size={60} color="#fff" />
        <TextContainer>
          <Title>Olá, {user.nome}</Title>
          <Text>Como está se sentindo?</Text>
        </TextContainer>
      </UserContainer>
      <IconContainer>
        <FontAwesomeIcon
          name="sign-out"
          size={25}
          color="#fff"
          onPress={handleLogout}
        />
      </IconContainer>
    </Container>
  );
};

export default Header;
