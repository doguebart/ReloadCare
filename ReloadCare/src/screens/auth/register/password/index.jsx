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
import { useNavigation, useRoute } from "@react-navigation/native";
import { Context } from "../../../../context/UserContext.jsx";
import Label from "../../../../components/form/label";
import InputComponent from "../../../../components/form/input";
import ButtonComponent from "../../../../components/form/button";

const Password = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    senha: "",
    cf_senha: "",
  });
  const route = useRoute();
  const [validationPerformed, setValidationPerformed] = useState(false);
  const [errors, setErrors] = useState({});

  const { requestBody } = route.params;

  const { register } = useContext(Context);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.senha.trim() !== formData.cf_senha.trim()) {
      newErrors.cf_senha = "As senhas não coincidem";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = async () => {
    setValidationPerformed(true);

    if (validateForm()) {
      const updatedRequestBody = {
        ...requestBody,
        senha: formData.senha,
      };

      console.log("FormData:", updatedRequestBody);
      console.log("Formulários válidos:", updatedRequestBody);

      try {
        await register(updatedRequestBody);
      } catch (error) {
        console.log("Erro durante o registro:", error);
      }
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
        </Form>
        <ButtonComponent
          style={{ width: "50%", marginLeft: 20 }}
          onPress={handleContinue}
          icon="arrow-right"
        >
          Registrar
        </ButtonComponent>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Password;
