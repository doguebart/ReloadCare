import React, { useState, useEffect } from "react";
import {
  Container,
  CardContainer,
  Card,
  IconContainer,
  TitleContainer,
  IconAreaContainer,
  Title,
  Text,
  ScrollViewContainer,
} from "./styles";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import ButtonComponent from "../../../components/form/button";

import api from "../../../api/api";

const Strategies = () => {
  const [user, setUser] = useState({});
  const [isCardExpanded1, setIsCardExpanded1] = useState(true);
  const [isCardExpanded2, setIsCardExpanded2] = useState(false);
  const [isCardExpanded3, setIsCardExpanded3] = useState(false);
  const [isCardExpanded4, setIsCardExpanded4] = useState(false);
  const [isCardExpanded, setIsCardExpanded] = useState(false);
  const [showStrategyCard, setShowStrategyCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleCard1 = () => {
    setIsCardExpanded1(!isCardExpanded1);
  };

  const handleToggleCard2 = () => {
    setIsCardExpanded2(!isCardExpanded2);
  };

  const handleToggleCard3 = () => {
    setIsCardExpanded3(!isCardExpanded3);
  };

  const handleToggleCard4 = () => {
    setIsCardExpanded4(!isCardExpanded4);
  };

  const handleToggleCard = () => {
    setIsCardExpanded(!isCardExpanded);
  };

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
              setUser((prevUser) => {
                return { ...prevUser, ...response.data };
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
    startSpinnerAnimation();
  }, []);

  const startSpinnerAnimation = () => {
    if (showStrategyCard) {
      setIsLoading(true);
    }
  };

  const handleCreateStrategy = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowStrategyCard(true);
      setIsLoading(false);
    }, 5000);
  };

  const handleDeleteCard = () => {
    Alert.alert(
      "Confirmação",
      "Tem certeza que deseja excluir essa estratégia?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          onPress: () => {
            setShowStrategyCard(false);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Container>
      {isLoading ? (
        <IconAreaContainer>
          <Animatable.View
            animation="rotate"
            easing="linear"
            iterationCount="infinite"
          >
            <Icon name="spinner-3" size={40} color="#66b567" />
          </Animatable.View>
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              fontWeight: "400",
              opacity: 0.5,
            }}
          >
            Criando Estratégia
          </Text>
        </IconAreaContainer>
      ) : (
        <>
          {showStrategyCard ? (
            <>
              <Title
                style={{ marginLeft: 10, marginTop: 60, marginBottom: 20 }}
              >
                Estratégias e Conselhos
              </Title>
              <ScrollViewContainer>
                <CardContainer>
                  <Card
                    style={{
                      width: "100%",
                      backgroundColor: "#66b567",
                      height: isCardExpanded ? "200%" : "auto",
                    }}
                  >
                    <TitleContainer>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: 500,
                          color: "white",
                          marginBottom: 0,
                        }}
                      >
                        Estratégia 1
                      </Text>
                      <IconContainer>
                        <Icon
                          name="trash"
                          onPress={handleDeleteCard}
                          size={30}
                          color="#fff"
                        />
                        <Icon
                          name={isCardExpanded ? "chevron-up" : "chevron-down"}
                          size={30}
                          style={{ marginLeft: 10 }}
                          color="#fff"
                          onPress={handleToggleCard}
                        />
                      </IconContainer>
                    </TitleContainer>

                    {isCardExpanded && (
                      <>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 40,
                            paddingBottom: 10,
                            marginTop: 20,
                            color: "white",
                            opacity: 0.7,
                          }}
                        >
                          Marque uma data para parar. Isso lhe dará um objetivo
                          a alcançar e ajudará a manter você motivado. Comece a
                          reduzir a quantidade de maconha que você fuma
                          gradualmente. Isso ajudará a diminuir os sintomas de
                          abstinência.
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 40,
                            paddingBottom: 10,
                            marginTop: 5,
                            color: "white",
                            opacity: 0.7,
                          }}
                        >
                          Identifique seus gatilhos. Quais são as situações ou
                          emoções que o levam a fumar maconha? Evite esses
                          gatilhos o máximo possível. Encontre outras formas de
                          lidar com o estresse e a ansiedade. Exercício,
                          meditação e técnicas de respiração são ótimas opções.
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 40,
                            paddingBottom: 10,
                            marginTop: 5,
                            color: "white",
                            opacity: 0.7,
                          }}
                        >
                          Procure ajuda profissional. Se você estiver lutando
                          para parar de fumar sozinho, procure o apoio de um
                          terapeuta ou conselheiro.
                        </Text>
                      </>
                    )}
                  </Card>
                </CardContainer>
              </ScrollViewContainer>
            </>
          ) : (
            <>
              <Title
                style={{
                  textTransform: "capitalize",
                  marginLeft: 10,
                  marginTop: 60,
                  marginBottom: 20,
                }}
              >
                Crie uma nova estratégia
              </Title>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#999",
                  opacity: 0.5,
                }}
              >
                *A estratégia será criada com base nos dados abaixo, fornecidos
                no seu registro de saúde
              </Text>
              <ScrollViewContainer>
                <CardContainer>
                  {user.healthRegisters && user.healthRegisters.length > 0 && (
                    <>
                      <Card
                        style={{
                          width: "100%",
                          backgroundColor: "#66b567",
                          flex: 1,
                        }}
                      >
                        <TitleContainer>
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: 500,
                              color: "white",
                            }}
                          >
                            Saúde
                          </Text>
                          <Icon
                            name={
                              isCardExpanded1 ? "chevron-up" : "chevron-down"
                            }
                            size={30}
                            style={{ marginLeft: 10 }}
                            color="#fff"
                            onPress={handleToggleCard1}
                          />
                        </TitleContainer>

                        {isCardExpanded1 && (
                          <Text
                            style={{
                              fontSize: 16,
                              marginTop: 20,
                              fontWeight: 40,
                              color: "white",
                              opacity: 0.7,
                            }}
                          >
                            {user.healthRegisters[0].health}
                          </Text>
                        )}
                      </Card>
                      <Card
                        style={{
                          width: "100%",
                          backgroundColor: "#66b567",
                          flex: 1,
                        }}
                      >
                        <TitleContainer>
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: 500,
                              color: "white",
                            }}
                          >
                            Saúde Mental
                          </Text>
                          <Icon
                            name={
                              isCardExpanded2 ? "chevron-up" : "chevron-down"
                            }
                            size={30}
                            style={{ marginLeft: 10 }}
                            color="#fff"
                            onPress={handleToggleCard2}
                          />
                        </TitleContainer>

                        {isCardExpanded2 && (
                          <Text
                            style={{
                              fontSize: 16,
                              marginTop: 20,
                              fontWeight: 40,
                              color: "white",
                              opacity: 0.7,
                            }}
                          >
                            {user.healthRegisters[0].mentalHealth}
                          </Text>
                        )}
                      </Card>
                      <Card
                        style={{
                          width: "100%",
                          backgroundColor: "#66b567",
                          flex: 1,
                        }}
                      >
                        <TitleContainer>
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: 500,
                              color: "white",
                            }}
                          >
                            Substâncias e Frequência
                          </Text>
                          <Icon
                            name={
                              isCardExpanded3 ? "chevron-up" : "chevron-down"
                            }
                            size={30}
                            style={{ marginLeft: 10 }}
                            color="#fff"
                            onPress={handleToggleCard3}
                          />
                        </TitleContainer>

                        {isCardExpanded3 && (
                          <Text
                            style={{
                              fontSize: 16,
                              marginTop: 20,
                              fontWeight: 40,
                              color: "white",
                              opacity: 0.7,
                            }}
                          >
                            {user.healthRegisters[0].substances},{" "}
                            {user.healthRegisters[0].substanceFrequencies}.
                          </Text>
                        )}
                      </Card>
                      <Card
                        style={{
                          width: "100%",
                          backgroundColor: "#66b567",
                          flex: 1,
                        }}
                      >
                        <TitleContainer>
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: 500,
                              color: "white",
                            }}
                          >
                            Minhas Metas
                          </Text>
                          <Icon
                            name={
                              isCardExpanded4 ? "chevron-up" : "chevron-down"
                            }
                            size={30}
                            style={{ marginLeft: 10 }}
                            color="#fff"
                            onPress={handleToggleCard4}
                          />
                        </TitleContainer>

                        {isCardExpanded4 && (
                          <Text
                            style={{
                              fontSize: 16,
                              marginTop: 20,
                              fontWeight: 40,
                              color: "white",
                              opacity: 0.7,
                            }}
                          >
                            {user.healthRegisters[0].goals}
                          </Text>
                        )}
                      </Card>
                    </>
                  )}
                </CardContainer>
                <ButtonComponent
                  onPress={handleCreateStrategy}
                  style={{ width: "50%", alignSelf: "center", marginTop: 20 }}
                >
                  Criar estratégia
                </ButtonComponent>
              </ScrollViewContainer>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default Strategies;
