import React from "react";
import { Container, LabelComponent } from "./styles";

const Label = ({ children }) => {
  return (
    <Container>
      <LabelComponent>{children}</LabelComponent>
    </Container>
  );
};

export default Label;
