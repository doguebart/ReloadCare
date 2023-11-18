import React, { useState } from "react";
import {
  Container,
  Form,
  Title,
  TextContainer,
  InputContainer,
  KeyboardAvoidingView,
  ScrollViewContainer,
  CardContainer,
  IconContainer,
  Card,
  ButtonContainer,
} from "./styles";

import Icon from "react-native-vector-icons/EvilIcons";
import Label from "../../../components/form/label";
import InputComponent from "../../../components/form/input";
import ButtonComponent from "../../../components/form/button";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    nome: "",
    idade: "",
    email: "",
  });
  const [passwordInfo, setPasswordInfo] = useState({
    senha: "",
    cf_senha: "",
  });
  const [validationPerformed, setValidationPerformed] = useState(false);
  const [errors, setErrors] = useState({});
  const [currentForm, setCurrentForm] = useState(1);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (name, value) => {
    if (currentForm === 1) {
      setPersonalInfo({ ...personalInfo, [name]: value });
    } else if (currentForm === 2) {
      setPasswordInfo({ ...passwordInfo, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (currentForm === 1) {
      if (!personalInfo.nome.trim()) {
        newErrors.nome = "Nome é obrigatório";
      }

      if (!personalInfo.idade.trim()) {
        newErrors.idade = "Idade é obrigatória";
      } else {
        const age = parseInt(personalInfo.idade);
        if (age < 16) {
          newErrors.idade =
            "Você deve ter pelo menos 16 anos para criar uma conta";
        } else if (age > 100) {
          newErrors.idade = "Por favor, insira a sua verdadeira idade";
        }
      }

      if (!personalInfo.email.trim()) {
        newErrors.email = "E-mail é obrigatório";
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(personalInfo.email)) {
          newErrors.email = "E-mail inválido";
        }
      }
    } else if (currentForm === 2) {
      if (!passwordInfo.senha.trim()) {
        newErrors.senha = "Senha é obrigatória";
      }

      if (!passwordInfo.cf_senha.trim()) {
        newErrors.cf_senha = "Confirmação de senha é obrigatória";
      } else if (passwordInfo.senha !== passwordInfo.cf_senha) {
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
        console.log("Formulários válidos:", {
          ...personalInfo,
          ...passwordInfo,
        });
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
      {editMode ? (
        <KeyboardAvoidingView style={{ flex: 1, justifyContent: "center" }}>
          <Title style={{ marginLeft: 20, marginBottom: 40 }}>
            Minhas Informações
          </Title>
          <Form>
            <ScrollViewContainer>
              {currentForm === 1 && (
                <>
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
                      onChangeText={(value) =>
                        handleInputChange("idade", value)
                      }
                      placeholder="Insira sua idade"
                      errorMessage={validationPerformed && errors.idade}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label>Seu melhor e-mail</Label>
                    <InputComponent
                      type="email"
                      name="email"
                      onChangeText={(value) =>
                        handleInputChange("email", value)
                      }
                      placeholder="Insira um e-mail válido"
                      errorMessage={validationPerformed && errors.email}
                    />
                  </InputContainer>
                </>
              )}
              {currentForm === 2 && (
                <>
                  <InputContainer>
                    <Label>Nova senha</Label>
                    <InputComponent
                      type="password"
                      name="senha"
                      secureTextEntry={true}
                      onChangeText={(value) =>
                        handleInputChange("senha", value)
                      }
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
                      onChangeText={(value) =>
                        handleInputChange("cf_senha", value)
                      }
                      placeholder="As senhas devem ser iguais"
                      errorMessage={validationPerformed && errors.cf_senha}
                    />
                  </InputContainer>
                </>
              )}
            </ScrollViewContainer>
            <ButtonContainer>
              <ButtonComponent
                onPress={handleEditClick}
                style={{ width: "48%", backgroundColor: "red" }}
              >
                Cancelar
              </ButtonComponent>
              <ButtonComponent
                onPress={handleContinue}
                style={{ width: "48%" }}
              >
                Salvar
              </ButtonComponent>
            </ButtonContainer>
          </Form>
        </KeyboardAvoidingView>
      ) : (
        <>
          <Title style={{ marginBottom: 0 }}>Olá, Douglas</Title>
          <CardContainer>
            <Card
              style={{ backgroundColor: "#66b567" }}
              onPress={handleEditClick}
            >
              <IconContainer style={{ backgroundColor: "#458446" }}>
                <Icon name="pencil" size={30} color="#fff" />
              </IconContainer>
              <TextContainer>
                <Title
                  style={{
                    width: "100%",
                    fontSize: 18,
                    color: "white",
                    fontWeight: 500,
                    marginLeft: 0,
                    marginBottom: 0,
                    marginTop: 10,
                  }}
                >
                  Editar Minhas Informações
                </Title>
              </TextContainer>
            </Card>
            <Card style={{ backgroundColor: "#66b567" }}>
              <IconContainer style={{ backgroundColor: "#458446" }}>
                <Icon name="trash" size={30} color="#fff" />
              </IconContainer>
              <TextContainer>
                <Title
                  style={{
                    width: "100%",
                    fontSize: 18,
                    color: "white",
                    fontWeight: 500,
                    marginLeft: 0,
                    marginBottom: 0,
                    marginTop: 10,
                  }}
                >
                  Excluir minha conta
                </Title>
              </TextContainer>
            </Card>
          </CardContainer>
        </>
      )}
    </Container>
  );
};

export default Profile;
