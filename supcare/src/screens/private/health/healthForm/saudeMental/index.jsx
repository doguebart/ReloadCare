import React, { useState } from "react";
import {
  Container,
  Form,
  ScrollViewContainer,
  InputContainer,
  KeyboardAvoidingView,
  Title,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import Label from "../../../../../components/form/label";
import InputComponent from "../../../../../components/form/input";
import ButtonComponent from "../../../../../components/form/button";

const SaudeMental = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [mentalHealth, setMentalHealth] = useState('');
  const [validationPerformed, setValidationPerformed] = useState(false);
  const [errors, setErrors] = useState({});

  const { health } = route.params;

  const handleInputChange = (name, value) => {
    setMentalHealth({ ...mentalHealth, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!mentalHealth.mentalHealth.trim()) {
      newErrors.mentalHealth = "Por favor, nos conte sobre sua saúde mental";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = async () => {
    setValidationPerformed(true);

    if (validateForm()) {
      navigation.navigate("Substancias", { health, mentalHealth });
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
          <Title style={{ marginLeft: 0, width: "80%" }}>Como está a sua saúde mental?</Title>
          <ScrollViewContainer>
            <InputContainer>
              <Label>Conte-nos sobre sua saúde mental</Label>
              <InputComponent
                name="mentalHealth"
                onChangeText={(value) =>
                  handleInputChange("mentalHealth", value)
                }
                placeholder="Como você está se sentindo?"
                errorMessage={validationPerformed && errors.mentalHealth}
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

export default SaudeMental;
