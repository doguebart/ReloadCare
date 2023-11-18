import React, { useState } from "react";
import {
  Container,
  Form,
  ScrollViewContainer,
  InputContainer,
  KeyboardAvoidingView,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

import Label from "../../../components/form/label";
import InputComponent from "./../../../components/form/input";
import ButtonComponent from "./../../../components/form/button";

const Register = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({ nome: "", idade: "", email: "" });
  const [passwordData, setPasswordData] = useState({ senha: "", cf_senha: "" });
  const [validationPerformed, setValidationPerformed] = useState(false);
  const [errors, setErrors] = useState({});
  const [currentForm, setCurrentForm] = useState(1);

  const handleInputChange = (name, value) => {
    if (currentForm === 1) {
      setFormData({ ...formData, [name]: value });
    } else if (currentForm === 2) {
      setPasswordData({ ...passwordData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (currentForm === 1) {
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
    } else if (currentForm === 2) {
      if (!passwordData.senha.trim()) {
        newErrors.senha = "Senha é obrigatória";
      }

      if (!passwordData.cf_senha.trim()) {
        newErrors.cf_senha = "Confirmação de senha é obrigatória";
      } else if (passwordData.senha !== passwordData.cf_senha) {
        newErrors.cf_senha = "As senhas não coincidem";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    setValidationPerformed(true);

    if (validateForm()) {
      if (currentForm < 3) {
        setCurrentForm(currentForm + 1);
      } else {
        console.log("Formulários válidos:", { ...formData, ...passwordData });
        // Submissão do formulário (adicione sua lógica aqui)
        // Temporariamente, você pode redirecionar para a próxima página assim:
        navigation.navigate("Login");
      }
    } else {
      console.log("Formulários inválidos, corrija os erros:", errors);
    }
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Title style={{ width: "80%" }}>
          {currentForm === 1 && "Informações Pessoais"}
          {currentForm === 2 && "Crie uma Senha"}
        </Title>
        <Form>
          {currentForm === 1 && (
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
          )}

          {currentForm === 2 && (
            <ScrollViewContainer>
              <InputContainer>
                <Label>Nova senha</Label>
                <InputComponent
                  type="password"
                  name="senha"
                  secureTextEntry={true}
                  onChangeText={(value) => handleInputChange("senha", value)}
                  placeholder="Insira uma senha forte"
                  errorMessage={validationPerformed && errors.senha}
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
                  errorMessage={validationPerformed && errors.cf_senha}
                />
              </InputContainer>
            </ScrollViewContainer>
          )}
        </Form>
        <ButtonComponent
          style={{ marginLeft: 20 }}
          onPress={handleContinue}
          icon="arrow-right"
        >
          Continuar
        </ButtonComponent>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Register;
