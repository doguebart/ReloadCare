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
import ButtonComponent from "./../../../components/form/button";

const Health = () => {
  const [isCardExpanded1, setIsCardExpanded1] = useState(true);
  const [isCardExpanded2, setIsCardExpanded2] = useState(false);
  const [isCardExpanded3, setIsCardExpanded3] = useState(false);
  const [isCardExpanded4, setIsCardExpanded4] = useState(false);

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

  return (
    <Container>
      <Title style={{ marginBottom: 20 }}>Meu registro de saúde</Title>

      <TitleContainer
        style={{ justifyContent: "none", marginLeft: 20, marginBottom: 20 }}
      >
        <Icon
          name={"user"}
          size={40}
          style={{ marginLeft: 0 }}
          color="#66b567"
        />
        <Text
          style={{ fontSize: 18, fontWeight: 500, color: "#000", opacity: 0.5 }}
        >
          Douglas Welber, 18 anos
        </Text>
      </TitleContainer>

      <ScrollViewContainer>
        <CardContainer>
          <Card
            style={{
              width: "100%",
              backgroundColor: "#66b567",
              flex: 1,
            }}
          >
            <TitleContainer>
              <Text style={{ fontSize: 20, fontWeight: 500, color: "white" }}>
                Saúde
              </Text>
              <Icon
                name={isCardExpanded1 ? "chevron-up" : "chevron-down"}
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
                laudantium odio quos temporibus repellat tempora doloribus
                facere sed, reprehenderit obcaecati doloremque beatae quas
                pariatur cupiditate, debitis maxime nobis eaque voluptas!
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
              <Text style={{ fontSize: 20, fontWeight: 500, color: "white" }}>
                Saúde Mental
              </Text>
              <Icon
                name={isCardExpanded2 ? "chevron-up" : "chevron-down"}
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
                laudantium odio quos temporibus repellat tempora doloribus
                facere sed, reprehenderit obcaecati doloremque beatae quas
                pariatur cupiditate, debitis maxime nobis eaque voluptas!
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
              <Text style={{ fontSize: 20, fontWeight: 500, color: "white" }}>
                Substâncias e Frequência
              </Text>
              <Icon
                name={isCardExpanded3 ? "chevron-up" : "chevron-down"}
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
                laudantium odio quos temporibus repellat tempora doloribus
                facere sed, reprehenderit obcaecati doloremque beatae quas
                pariatur cupiditate, debitis maxime nobis eaque voluptas!
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
              <Text style={{ fontSize: 20, fontWeight: 500, color: "white" }}>
                Minhas Metas
              </Text>
              <Icon
                name={isCardExpanded4 ? "chevron-up" : "chevron-down"}
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
                laudantium odio quos temporibus repellat tempora doloribus
                facere sed, reprehenderit obcaecati doloremque beatae quas
                pariatur cupiditate, debitis maxime nobis eaque voluptas!
              </Text>
            )}
          </Card>
        </CardContainer>
        <ButtonComponent style={{ width: "50%", alignSelf: "center", marginTop: 20 }}>
          Nova Avaliação
        </ButtonComponent>
      </ScrollViewContainer>
    </Container>
  );
};

export default Health;
