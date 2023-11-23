import React, { useState, useEffect } from "react";
import {
  Container,
  CardContainer,
  Card,
  IconContainer,
  TitleContainer,
  Title,
  Text,
  ScrollViewContainer,
} from "./styles";
import OpenAI from "openai";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import Icon from "react-native-vector-icons/EvilIcons";

const Strategies = () => {
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  const { health, mentalHealth, substances, substanceFrequencies, goals } =
    route.params;

  const handleToggleCard = () => {
    setIsCardExpanded(!isCardExpanded);
  };

  const prompt = `Estamos usando a api do chatgpt para gerar conselhos/estratégias para combater o uso das substancias, vou te enviar alguns dados do registro de saude do usuario e quero que você crie um conselho ou estratégia para ajudar essa pessoa a parar com o uso de substancias

  Estado de sáude ou doenças do usuario: ${health},
  Estado de sáude mental do usuário: ${mentalHealth},
  Substancias que o usuario utiliza: ${substances},
  Frequencia em que ele utiliza essas substancias: ${substanceFrequencies},
  Meta do usuário com o uso do nosso app (sua ajuda): ${goals},
  `;

  // console.log(prompt);

  const openai = new OpenAI({
    apiKey: "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",
  });

  const handleChatGpt = async () => {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    console.log(completion.choices[0]);
  };

  useEffect(() => {
    handleChatGpt();
  }, []);

  return (
    <Container>
      <Title style={{ marginTop: 60, marginBottom: 0 }}>
        39 Estratégias Encontradas
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
              <Text style={{ fontSize: 20, fontWeight: 500, color: "white" }}>
                Estratégia 1
              </Text>
              <IconContainer>
                <Icon name="trash" size={30} color="#fff" />
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
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 40,
                  color: "white",
                  opacity: 0.7,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                ex iste eius enim obcaecati dolores, eum laudantium nesciunt
                voluptas unde quaerat, quae illo eos iure, temporibus commodi
                perspiciatis esse error reiciendis ratione animi facilis. Animi
                ut ad laborum nemo, sequi eveniet maxime reprehenderit voluptate
                eos dolore omnis quas explicabo rerum corporis, modi laudantium
                obcaecati saepe rem, officiis deleniti perspiciatis blanditiis
                inventore. Ipsum rem ipsa, sapiente quis harum minima assumenda
                id laudantium magni maxime quaerat ullam provident, alias earum,
                vel incidunt dolorum repudiandae autem? Cupiditate quas mollitia
                sunt atque tenetur accusantium odit neque numquam incidunt vero
                laboriosam reprehenderit placeat, possimus iusto?
              </Text>
            )}
          </Card>
        </CardContainer>
      </ScrollViewContainer>
    </Container>
  );
};

export default Strategies;
