import React from "react";
import { Container, IconContainer, IconText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

const Menu = () => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <Container>
      <IconContainer>
        <Icon name="home" size={25} color="#fff" />
        <IconText>Início</IconText>
      </IconContainer>
      <IconContainer>
        <Icon name="clipboard" size={25} color="#fff" />
        <IconText>Saúde</IconText>
      </IconContainer>
      <IconContainer>
        <Icon name="list" size={25} color="#fff" />
        <IconText>Estratégias</IconText>
      </IconContainer>
      <IconContainer>
        <Icon name="user" size={25} color="#fff" />
        <IconText>Perfil</IconText>
      </IconContainer>
    </Container>
  );
};

export default Menu;
