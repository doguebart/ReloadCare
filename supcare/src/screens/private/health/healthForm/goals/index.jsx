import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  ScrollViewContainer,
  InputContainer,
  KeyboardAvoidingView,
  Title,
} from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../../../../api/api";
import { useNavigation, useRoute } from "@react-navigation/native";
import Label from "../../../../../components/form/label";
import InputComponent from "../../../../../components/form/input";
import ButtonComponent from "../../../../../components/form/button";

const Goals = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const [goals, setGoals] = useState("");
  const [id, setId] = useState("");
  const [validationPerformed, setValidationPerformed] = useState(false);
  const [errors, setErrors] = useState({});

  const { health, mentalHealth, substances, substanceFrequencies } =
    route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        const token = await AsyncStorage.getItem("token");

        setId(userId);

        if (userId && token) {
          api
            .get(`usuarios/${userId}`, {
              headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
              },
            })
            .then((response) => {
              setUser(response.data);
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

  const handleInputChange = (name, value) => {
    setGoals((prevGoals) => ({ ...prevGoals, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!goals.goals.trim()) {
      newErrors.goals = "Por favor, informe suas metas";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = async () => {
    setValidationPerformed(true);

    if (validateForm()) {
      try {
        const body = {
          health: health.health,
          mentalHealth: mentalHealth.mentalHealth,
          substances,
          substanceFrequencies,
          goals: goals.goals,
        };

        await AsyncStorage.setItem("userGoals", JSON.stringify(body));

        await api.post(`usuarios/${id}/health`, body);
        navigation.navigate("Strategies");

        console.log("Indo para strategies com: ", body);
      } catch (error) {
        console.log(error);
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
        <Form>
          <Title style={{ marginLeft: 0, width: "80%" }}>
            Conte-nos sobre as metas que deseja atingir com nossa a ajuda
          </Title>
          <ScrollViewContainer>
            <InputContainer>
              <Label>Descreva quais metas deseja atingir</Label>
              <InputComponent
                name="goals"
                onChangeText={(value) => handleInputChange("goals", value)}
                placeholder="Conte-nos detalhadamente"
                errorMessage={validationPerformed && errors.goals}
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

export default Goals;
