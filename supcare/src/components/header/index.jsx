import React from "react";
import {
  Container,
  UserContainer,
  IconContainer,
  TextContainer,
  Title,
  Text,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

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
        <FontAwesomeIcon
          name="sign-out"
          size={25}
          color="#fff"
          // onPress={handleLogout}
        />
      </IconContainer>
    </Container>
  );
};

export default Header;
