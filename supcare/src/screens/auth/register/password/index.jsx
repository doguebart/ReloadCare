import React, { useState } from "react";
import {
  Container,
  Form,
  ScrollViewContainer,
  InputContainer,
  LinkContainer,
  KeyboardAvoidingView,
  Text,
  Title,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/EvilIcons";

import Label from "../../../../components/form/label";
import InputComponent from "../../../../components/form/input";
import ButtonComponent from "../../../../components/form/button";

const Password = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { nome, idade, email } = route.params;
  const [passwordData, setPasswordData] = useState({ senha: "", cf_senha: "" });
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setPasswordData({ ...passwordData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const goBack = () => {
    navigation.navigate("Register", { nome, idade, email });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!passwordData.senha.trim()) {
      newErrors.senha = "Senha é obrigatória";
    }

    if (!passwordData.cf_senha.trim()) {
      newErrors.cf_senha = "Confirmação de senha é obrigatória";
    } else if (passwordData.senha !== passwordData.cf_senha) {
      newErrors.cf_senha = "As senhas não coincidem";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const continueToNextPage = () => {
    if (validateForm()) {
      // aqui vem o metodo de criação de conta
    } else {
      console.log("Formulário inválido, corrija os erros:", errors);
    }
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <LinkContainer onPress={goBack}>
          <Icon name="arrow-left" size={24} color="#66b567" />
          <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: 2 }}>
            Voltar
          </Text>
        </LinkContainer>

        <Form>
          <Title>CRIE UMA NOVA SENHA</Title>
          <ScrollViewContainer>
            <InputContainer>
              <Label>Nova senha</Label>
              <InputComponent
                type="password"
                name="senha"
                secureTextEntry={true}
                onChangeText={(value) => handleInputChange("senha", value)}
                placeholder="Insira uma senha forte"
                errorMessage={errors.senha}
              />
            </InputContainer>
            <InputContainer>
              <Label>Confirme sua senha</Label>
              <InputComponent
                type="password"
                name="cf_senha"
                secureTextEntry={true}
                onChangeText={(value) => handleInputChange("cf_senha", value)}
                placeholder="As senhas devem ser iguais"
                errorMessage={errors.cf_senha}
              />
            </InputContainer>
          </ScrollViewContainer>
          <ButtonComponent onPress={continueToNextPage}>
            Criar Conta
          </ButtonComponent>
        </Form>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Password;
