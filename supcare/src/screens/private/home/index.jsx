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
} from "./styles";
import Icon from "react-native-vector-icons/EvilIcons";
import Carousel from "react-native-snap-carousel";

import bannerAi from "../../../assets/bannerai.png";
import bannerMetas from "../../../assets/bannerMetas.png";
import Header from "../../../components/header";

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const data = [
    { id: 1, image: bannerAi },
    { id: 2, image: bannerMetas },
  ];

  const renderItem = ({ item }) => <ImageBanner source={item.image} />;

  return (
    <Container>
      <Header />
      <CardContainer>
        <Card style={{ backgroundColor: "#66b567" }}>
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
              Criar Registro de saúde
            </Title>
          </TitleContainer>
        </Card>
        <Card style={{ backgroundColor: "#66b567" }}>
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
    </Container>
  );
};

export default Home;
