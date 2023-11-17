import React, { useState } from "react";
import {
  Container,
  Form,
  ScrollViewContainer,
  InputContainer,
  Text,
  KeyboardAvoidingView,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import Label from "../../../components/form/label";
import InputComponent from "./../../../components/form/input";
import ButtonComponent from "./../../../components/form/button";
import LinkComponent from "./../../../components/form/link";

const Register = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({ email: "", senha: "" });
  const [validationPerformed, setValidationPerformed] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "E-mail é obrigatório";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "E-mail inválido";
      }
    }

    if (!formData.senha) {
      newErrors.senha = "Senha é obrigatória";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    setValidationPerformed(true);

    if (validateForm()) {
    } else {
      console.log("Formulário inválido, corrija os erros:", errors);
    }
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Title>Entrar</Title>
        <Form>
          <ScrollViewContainer>
            <InputContainer>
              <Label>E-mail</Label>
              <InputComponent
                type="email"
                name="email"
                onChangeText={(value) => handleInputChange("email", value)}
                placeholder="Insira seu e-mail"
                errorMessage={errors.email}
              />
            </InputContainer>
            <InputContainer>
              <Label>Senha</Label>
              <InputComponent
                type="password"
                name="senha"
                secureTextEntry={true}
                onChangeText={(value) => handleInputChange("senha", value)}
                placeholder="Insira sua senha"
                errorMessage={errors.senha}
              />
            </InputContainer>
          </ScrollViewContainer>
          <ButtonComponent onPress={handleLogin}>Entrar</ButtonComponent>
          <LinkComponent
            style={{ color: "#999", fontWeight: "400" }}
            onPress={goToRegister}
          >
            Ainda não tem uma conta? <Text>Criar</Text>
          </LinkComponent>
        </Form>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Register;
