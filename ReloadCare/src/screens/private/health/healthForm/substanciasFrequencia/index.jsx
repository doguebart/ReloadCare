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

const Substancias = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    substances: "",
    substanceFrequencies: "",
  });
  const [validationPerformed, setValidationPerformed] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const { health, mentalHealth } = route.params;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.substances.trim()) {
      newErrors.substances = "Por favor, informe se usa alguma substância";
    }

    if (!formData.substanceFrequencies.trim()) {
      newErrors.substanceFrequencies =
        "Por favor, informe se usa alguma substância";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = async () => {
    setValidationPerformed(true);

    if (validateForm()) {
      navigation.navigate("Goals", {
        health,
        mentalHealth,
        substances: formData.substances,
        substanceFrequencies: formData.substanceFrequencies,
      });
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
            Você é usuário de alguma substâncias? Lícita ou ilícita?
          </Title>
          <ScrollViewContainer>
            <InputContainer>
              <Label>Você é usuário de alguma substância?</Label>
              <InputComponent
                name="substances"
                onChangeText={(value) => handleInputChange("substances", value)}
                placeholder="Álcool, tabaco, maconha, etc."
                errorMessage={validationPerformed && errors.substances}
              />
            </InputContainer>
            <InputContainer>
              <Label>Com que frequência você usa essas substâncias?</Label>
              <InputComponent
                name="substanceFrequencies"
                onChangeText={(value) =>
                  handleInputChange("substanceFrequencies", value)
                }
                placeholder="1 vez por semana, 1 vez por mês, Outra"
                errorMessage={
                  validationPerformed && errors.substanceFrequencies
                }
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

export default Substancias;
