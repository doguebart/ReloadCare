import React, { useState, useContext } from "react";
import {
  Container,
  Form,
  Text,
  ScrollViewContainer,
  InputContainer,
  KeyboardAvoidingView,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import Label from "../../../components/form/label";
import LinkComponent from "../../../components/form/link";
import InputComponent from "./../../../components/form/input";
import ButtonComponent from "./../../../components/form/button";

const Register = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    email: "",
  });
  const [validationPerformed, setValidationPerformed] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
    }

    if (!formData.idade.trim()) {
      newErrors.idade = "Idade é obrigatória";
    } else {
      const age = parseInt(formData.idade);
      if (age < 16) {
        newErrors.idade =
          "Você deve ter pelo menos 16 anos para criar uma conta";
      } else if (age > 100) {
        newErrors.idade = "Por favor, insira a sua verdadeira idade";
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "E-mail inválido";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = async () => {
    setValidationPerformed(true);

    if (validateForm()) {
      const user = formData;
      const requestBody = {
        nome: user.nome,
        age: user.idade,
        email: user.email,
      };
      navigation.navigate("Password", { requestBody });
    } else {
      console.log("Formulários inválidos, corrija os erros:", errors);
    }
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Form>
          <Title style={{ marginLeft: 0, width: "80%" }}>
            Informações Pessoais
          </Title>
          <ScrollViewContainer>
            <InputContainer>
              <Label>Nome completo</Label>
              <InputComponent
                type="text"
                name="nome"
                onChangeText={(value) => handleInputChange("nome", value)}
                placeholder="Insira seu nome completo"
                errorMessage={validationPerformed && errors.nome}
              />
            </InputContainer>
            <InputContainer>
              <Label>Quantos anos de idade você tem?</Label>
              <InputComponent
                type="number"
                name="idade"
                onChangeText={(value) => handleInputChange("idade", value)}
                placeholder="Insira sua idade"
                errorMessage={validationPerformed && errors.idade}
              />
            </InputContainer>
            <InputContainer>
              <Label>Seu melhor e-mail</Label>
              <InputComponent
                type="email"
                name="email"
                onChangeText={(value) => handleInputChange("email", value)}
                placeholder="Insira um e-mail válido"
                errorMessage={validationPerformed && errors.email}
              />
            </InputContainer>
          </ScrollViewContainer>
        </Form>
        <ButtonComponent
          style={{ width: "50%", marginLeft: 20 }}
          onPress={handleContinue}
          icon="arrow-right"
        >
          Continuar
        </ButtonComponent>
        <LinkComponent
          style={{ marginLeft: 20, color: "#999", fontWeight: "400" }}
          onPress={goToLogin}
        >
          Já tem uma conta? <Text>Entrar</Text>
        </LinkComponent>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Register;
