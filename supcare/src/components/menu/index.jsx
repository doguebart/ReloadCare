import React from "react";
import { Container, IconContainer, IconText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

const Menu = () => {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate("Home");
  };

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  const goToHealth = () => {
    navigation.navigate("Health");
  };

  const goToStrategies = () => {
    navigation.navigate("Strategies");
  };

  return (
    <Container>
      <IconContainer onPress={goToHome}>
        <Icon name="home" size={25} color="#fff" />
        <IconText>Início</IconText>
      </IconContainer>
      <IconContainer onPress={goToHealth}>
        <Icon name="clipboard" size={25} color="#fff" />
        <IconText>Saúde</IconText>
      </IconContainer>
      <IconContainer onPress={goToStrategies}>
        <Icon name="list" size={25} color="#fff" />
        <IconText>Estratégias</IconText>
      </IconContainer>
      <IconContainer onPress={goToProfile}>
        <Icon name="user" size={25} color="#fff" />
        <IconText>Perfil</IconText>
      </IconContainer>
    </Container>
  );
};

export default Menu;
