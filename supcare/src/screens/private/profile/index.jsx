import React, { useState, useEffect, useContext } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from "../../../context/UserContext.jsx";
import api from "../../../api/api.js";
import { Alert } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import Label from "../../../components/form/label";
import InputComponent from "../../../components/form/input";
import ButtonComponent from "../../../components/form/button";

const Profile = () => {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    email: "",
    senha: "",
    cf_senha: "",
  });
  const [validationPerformed, setValidationPerformed] = useState(false);
  const [errors, setErrors] = useState({});

  const { del } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        const token = await AsyncStorage.getItem("token");

        if (userId && token) {
          api
            .get(`usuarios/${userId}`, {
              headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
              },
            })
            .then((response) => {
              setUser(response.data);
              setFormData({
                nome: response.data.nome,
                idade: response.data.age,
                email: response.data.email,
                senha: response.data.senha,
                cf_senha: "",
              });
            })
            .catch((error) => {
              console.error("Error fetching user data:", error);
            });
        }
      } catch (error) {
        console.error("Error reading AsyncStorage:", error);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

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

    if (formData.senha.trim() !== formData.cf_senha.trim()) {
      newErrors.cf_senha = "As senhas não coincidem";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = async () => {
    setValidationPerformed(true);

    if (validateForm()) {
      const isDataChanged =
        user.nome !== formData.nome ||
        user.age !== formData.idade ||
        user.email !== formData.email ||
        user.senha !== formData.senha;

      if (isDataChanged) {
        const updatedUser = {
          nome: formData.nome,
          age: formData.idade,
          email: formData.email,
          senha: formData.senha,
        };

        try {
          await api.put(`usuarios/${user.id}`, updatedUser);
          setUser(updatedUser);
          setEditMode(false);
        } catch (error) {
          console.log("Error during update:", error);
        }
      } else {
        setEditMode(false);
      }
    } else {
      console.log("Form validation failed, correct errors:", errors);
    }
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      "Confirmação",
      "Tem certeza que deseja excluir sua conta?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          onPress: async () => {
            try {
              await del(user.id);
            } catch (error) {
              console.log("Erro durante a exclusão da conta:", error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Container>
      {editMode ? (
        <KeyboardAvoidingView style={{ flex: 1, justifyContent: "center" }}>
          <Form>
            <Title style={{ marginLeft: 0, marginBottom: 40 }}>
              Minhas Informações
            </Title>
            <ScrollViewContainer>
              <InputContainer>
                <Label>Nome completo</Label>
                <InputComponent
                  type="text"
                  name="nome"
                  onChangeText={(value) => handleInputChange("nome", value)}
                  placeholder="Insira seu nome completo"
                  value={formData.nome}
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
                  value={formData.idade}
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
                  value={formData.email}
                  errorMessage={validationPerformed && errors.email}
                />
              </InputContainer>
              <InputContainer>
                <Label>Nova senha</Label>
                <InputComponent
                  type="password"
                  name="senha"
                  secureTextEntry={true}
                  onChangeText={(value) => handleInputChange("senha", value)}
                  placeholder="Insira uma senha forte"
                  value={formData.senha}
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
                  value={formData.cf_senha}
                  errorMessage={validationPerformed && errors.cf_senha}
                />
              </InputContainer>

              <ButtonContainer>
                <ButtonComponent
                  onPress={handleEditClick}
                  style={{ width: "48%", backgroundColor: "darkred" }}
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
            </ScrollViewContainer>
          </Form>
        </KeyboardAvoidingView>
      ) : (
        <>
          <Title style={{ marginBottom: 0 }}>Olá, {user.nome}</Title>
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
            <Card
              onPress={handleDeleteAccount}
              style={{ backgroundColor: "#66b567" }}
            >
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
