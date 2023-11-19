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

import Label from "../../../../components/form/label";
import InputComponent from "../../../../components/form/input";
import ButtonComponent from "../../../../components/form/button";

const HealthForm = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    saude: "",
    saude_mental: "",
    substancias: "",
    outras_substancias: "",
    frequencia_substancias: "",
    metas: "",
  });
  const [validationPerformed, setValidationPerformed] = useState(false);
  const [errors, setErrors] = useState({});
  const [currentForm, setCurrentForm] = useState(1);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (currentForm === 1) {
      if (!formData.saude.trim()) {
        newErrors.saude =
          "Por favor, nos informe se está sentindo algo ou se tem alguma doença";
      }
      if (!formData.saude_mental.trim()) {
        newErrors.saude_mental = "Por favor, nos conte sobre sua saúde mental";
      }
    } else if (currentForm === 2) {
      if (!formData.substancias.trim()) {
        newErrors.substancias = "Por favor, informe se usa alguma substância";
      }

      if (!formData.frequencia_substancias.trim()) {
        newErrors.frequencia_substancias =
          "Por favor, informe a frequência de uso";
      }
    } else if (currentForm === 3) {
      if (!formData.metas.trim()) {
        newErrors.metas = "Por favor, descreva as metas que deseja atingir";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    setValidationPerformed(true);

    if (validateForm()) {
      if (currentForm < 4) {
        setCurrentForm(currentForm + 1);
      } else {
        console.log("Formulário válido:", formData);
        // Submissão do formulário (adicione sua lógica aqui)
        // Temporariamente, você pode redirecionar para a próxima página assim:
        navigation.navigate("Login");
      }
    } else {
      console.log("Formulário inválido, corrija os erros:", errors);
    }
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Title style={{ width: "80%" }}>
          {currentForm === 1 && "No geral, como está a sua saúde?"}
          {currentForm === 2 &&
            "Você é usuário de alguma substâncias? Lícita ou ilícita"}
          {currentForm === 3 &&
            "Conte-nos sobre as metas que deseja atingir com nossa a ajuda"}
        </Title>
        <Form>
          {currentForm === 1 && (
            <ScrollViewContainer>
              <InputContainer>
                <Label>
                  Nos últimos dias, sentiu algo ou possui alguma doença?
                </Label>
                <InputComponent
                  name="saude"
                  onChangeText={(value) => handleInputChange("saude", value)}
                  placeholder="Descreva com detalhes"
                  errorMessage={validationPerformed && errors.saude}
                />
              </InputContainer>
              <InputContainer>
                <Label>Conte-nos sobre sua saúde mental</Label>
                <InputComponent
                  name="saude_mental"
                  onChangeText={(value) =>
                    handleInputChange("saude_mental", value)
                  }
                  placeholder="Como você está se sentindo?"
                  errorMessage={validationPerformed && errors.saude_mental}
                />
              </InputContainer>
            </ScrollViewContainer>
          )}
          {currentForm === 2 && (
            <ScrollViewContainer>
              <InputContainer>
                <Label>Você é usuário de alguma substância?</Label>
                <InputComponent
                  name="substancias"
                  onChangeText={(value) =>
                    handleInputChange("substancias", value)
                  }
                  placeholder="Álcool, tabaco, maconha, etc."
                  errorMessage={validationPerformed && errors.substancias}
                />
              </InputContainer>
              <InputContainer>
                <Label>Com que frequência você usa essas substâncias?</Label>
                <InputComponent
                  name="frequencia_substancias"
                  onChangeText={(value) =>
                    handleInputChange("frequencia_substancias", value)
                  }
                  placeholder="1 vez por semana, 1 vez por mês, Outra"
                  errorMessage={
                    validationPerformed && errors.frequencia_substancias
                  }
                />
              </InputContainer>
            </ScrollViewContainer>
          )}
          {currentForm === 3 && (
            <InputContainer>
              <Label>Descreva quais metas deseja atingir</Label>
              <InputComponent
                name="metas"
                onChangeText={(value) => handleInputChange("metas", value)}
                placeholder="Conte-nos detalhadamente"
                errorMessage={validationPerformed && errors.metas}
              />
            </InputContainer>
          )}
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

export default HealthForm;
