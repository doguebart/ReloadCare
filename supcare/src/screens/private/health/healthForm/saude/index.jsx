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

import Label from "../../../../../components/form/label";
import InputComponent from "../../../../../components/form/input";
import ButtonComponent from "../../../../../components/form/button";

const Saude = () => {
  const navigation = useNavigation();
  const [health, setHealth] = useState('');
  const [validationPerformed, setValidationPerformed] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setHealth({ ...health, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!health.health.trim()) {
      newErrors.health =
        "Por favor, nos informe se está sentindo algo ou se tem alguma doença";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = async () => {
    setValidationPerformed(true);

    if (validateForm()) {
      navigation.navigate("SaudeMental", { health });
    } else {
      console.log("Formulários inválidos, corrija os erros:", errors);
    }
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Form>
          <Title style={{ marginLeft: 0, width: "80%" }}>
            No geral, como está a sua saúde?
          </Title>
          <ScrollViewContainer>
            <InputContainer>
              <Label>
                Nos últimos dias, sentiu algo ou possui alguma doença?
              </Label>
              <InputComponent
                name="health"
                onChangeText={(value) => handleInputChange("health", value)}
                placeholder="Descreva com detalhes"
                errorMessage={validationPerformed && errors.health}
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
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Saude;
