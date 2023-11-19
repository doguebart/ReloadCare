import React, { useState } from "react";
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
import Icon from "react-native-vector-icons/EvilIcons";

const Strategies = () => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  const handleToggleCard = () => {
    setIsCardExpanded(!isCardExpanded);
  };

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
