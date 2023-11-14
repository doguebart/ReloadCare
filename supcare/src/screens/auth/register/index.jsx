import React, { useState } from "react";
import {
  Container,
  Form,
  ScrollViewContainer,
  InputContainer,
  Text,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import Label from "../../../components/form/label";
import InputComponent from "./../../../components/form/input";
import ButtonComponent from "./../../../components/form/button";
import LinkComponent from "./../../../components/form/link";

const Register = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({ nome: "", idade: "", email: "" });
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    if (!formData.nome) {
      newErrors.nome = "Nome é obrigatório";
      formIsValid = false;
    }

    if (!formData.idade) {
      newErrors.idade = "Idade é obrigatória";
      formIsValid = false;
    }

    if (!formData.email) {
      newErrors.email = "E-mail é obrigatório";
      formIsValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "E-mail inválido";
        formIsValid = false;
      }
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const newPassword = () => {
    if (validateForm()) {
      navigation.navigate("Password", formData);
    } else {
      console.log("Formulário inválido, corrija os erros:", errors);
    }
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <Container>
      <Title>CRIE UMA NOVA CONTA</Title>
      <Form>
        <ScrollViewContainer>
          <InputContainer>
            <Label>Nome Completo</Label>
            <InputComponent
              type="text"
              name="nome"
              onChangeText={(value) => handleInputChange("nome", value)}
              placeholder="Insira seu nome completo"
              errorMessage={errors.nome}
            />
          </InputContainer>
          <InputContainer>
            <Label>Quantos anos de idade você tem?</Label>
            <InputComponent
              type="number"
              name="idade"
              onChangeText={(value) => handleInputChange("idade", value)}
              placeholder="Insira sua idade"
              errorMessage={errors.idade}
            />
          </InputContainer>
          <InputContainer>
            <Label>Seu melhor E-mail</Label>
            <InputComponent
              type="email"
              name="email"
              onChangeText={(value) => handleInputChange("email", value)}
              placeholder="Insira um e-mail válido"
              errorMessage={errors.email}
            />
          </InputContainer>
        </ScrollViewContainer>
        <ButtonComponent onPress={newPassword}>Continuar</ButtonComponent>
        <LinkComponent style={{ textAlign: "center" }} onPress={goToLogin}>
          Já tem uma conta? <Text>Entrar</Text>
        </LinkComponent>
      </Form>
    </Container>
  );
};

export default Register;
