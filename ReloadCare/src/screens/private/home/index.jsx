import React, { useState } from "react";
import {
  Container,
  CarouselItem,
  PaginationContainer,
  PaginationDot,
  ImageBanner,
  CardContainer,
  Card,
  IconContainer,
  TitleContainer,
  Title,
  ScrollViewContainer,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import Icon from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Carousel from "react-native-snap-carousel";

import bannerAi from "../../../assets/bannerai.png";
import bannerMetas from "../../../assets/bannerMetas.png";
import Header from "../../../components/header";

const Home = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [activeSlide, setActiveSlide] = useState(0);

  const data = [
    { id: 1, image: bannerAi },
    { id: 2, image: bannerMetas },
  ];

  const renderItem = ({ item }) => <ImageBanner source={item.image} />;

  const goToHealth = () => {
    navigation.navigate("Health");
  };

  const goToStrategies = () => {
    navigation.navigate("Strategies");
  };

  const goToHealthForms = () => {
    navigation.navigate("Saude");
  };

  return (
    <Container>
      <Header />
      <ScrollViewContainer>
        <CardContainer>
          <Card
            onPress={goToHealthForms}
            style={{ backgroundColor: "#66b567" }}
          >
            <IconContainer style={{ backgroundColor: "#458446" }}>
              <Icon name="plus" size={30} color="#fff" />
            </IconContainer>
            <TitleContainer>
              <Title
                style={{
                  fontSize: 18,
                  color: "white",
                  fontWeight: 500,
                  marginLeft: 0,
                  marginBottom: 0,
                  marginTop: 10,
                }}
              >
                Novo Registro de saúde
              </Title>
            </TitleContainer>
          </Card>
          <Card
            onPress={goToHealth}
            style={{
              width: "50%",
              height: "200px",
              backgroundColor: "#66b567",
            }}
          >
            <IconContainer style={{ backgroundColor: "#458446" }}>
              <Icon name="archive" size={30} color="#fff" />
            </IconContainer>
            <TitleContainer>
              <Title
                style={{
                  fontSize: 18,
                  color: "white",
                  fontWeight: 500,
                  marginLeft: 0,
                  marginBottom: 0,
                  marginTop: 10,
                }}
              >
                Meu Registro de saúde
              </Title>
            </TitleContainer>
          </Card>
        </CardContainer>
        <Card
          onPress={goToStrategies}
          style={{
            width: "95%",
            height: "200px",
            marginLeft: 10,
            backgroundColor: "#66b567",
          }}
        >
          <IconContainer style={{ backgroundColor: "#458446" }}>
            <FontAwesomeIcon
              name="list"
              size={18}
              color="#fff"
              // onPress={}
            />
          </IconContainer>
          <TitleContainer>
            <Title
              style={{
                fontSize: 18,
                color: "white",
                fontWeight: 500,
                marginLeft: 0,
                marginBottom: 0,
                marginTop: 10,
              }}
            >
              Minhas estratégias
            </Title>
          </TitleContainer>
        </Card>
        <CarouselItem>
          <Carousel
            data={data}
            renderItem={renderItem}
            sliderWidth={500}
            itemWidth={350}
            loop={true}
            autoplay={true}
            autoplayInterval={5000}
            onSnapToItem={(index) => setActiveSlide(index)}
          />
          <PaginationContainer>
            {data.map((_, index) => (
              <PaginationDot key={index} active={index === activeSlide} />
            ))}
          </PaginationContainer>
        </CarouselItem>
      </ScrollViewContainer>
    </Container>
  );
};

export default Home;
