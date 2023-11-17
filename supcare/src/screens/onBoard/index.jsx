import React, { useState } from "react";
import {
  Container,
  CarouselItem,
  PaginationContainer,
  PaginationDot,
  Text,
  Image,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";

import ButtonComponent from "./../../components/form/button";

const OnBoard = () => {
  const navigation = useNavigation();
  const [activeSlide, setActiveSlide] = useState(0);

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  const data = [
    {
      id: 1,
      image: require("../../assets/doctor.png"),
      description:
        "Nosso app é dedicado a ajudar você a expressar seus sentimentos, fortalecendo sua resistência contra substâncias prejudiciais.",
    },
    {
      id: 2,
      image: require("../../assets/ai.png"),
      description:
        "Oferecemos um amigo virtual pronto para compreender suas emoções e oferecer conselhos e estratégias personalizadas, guiando você para uma vida mais saudável.",
    },
    {
      id: 3,
      image: require("../../assets/metas.png"),
      description:
        "Com a ajuda de nossa inteligência artificial e ferramentas especializadas, você está capacitado a definir e atingir objetivos pessoais.",
    },
  ];

  return (
    <Container>
      <CarouselItem>
        <Carousel
          data={data}
          renderItem={({ item }) => (
            <>
              <Image source={item.image} />
              <Text
                style={{
                  alignSelf: "center",
                  color: "#999",
                  fontSize: 18,
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                {item.description}
              </Text>
            </>
          )}
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

      <ButtonComponent
        onPress={goToRegister}
        icon="arrow-right"
        style={{ alignSelf: "center", marginTop: 20 }}
      >
        Começar Agora
      </ButtonComponent>
    </Container>
  );
};

export default OnBoard;
