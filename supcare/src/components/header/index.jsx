import React from "react";
import {
  Container,
  UserContainer,
  IconContainer,
  TextContainer,
  Text,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/EvilIcons";

const Header = () => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <Container>
      <UserContainer onPress={goToProfile}>
        <Icon name="user" size={60} color="#fff" />
        <TextContainer>
          <Title>Olá, Douglas</Title>
          <Text>Como está se sentindo?</Text>
        </TextContainer>
      </UserContainer>
      <IconContainer>
        <Icon name="bell" size={32} color="#fff" />
      </IconContainer>
    </Container>
  );
};

export default Header;
