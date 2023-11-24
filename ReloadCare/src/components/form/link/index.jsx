import React from "react";
import { Container, Link, Text } from "./styles";

const LinkComponent = (props) => {
  const { onPress, style, children } = props;

  return (
    <Container>
      <Link onPress={onPress}>
        <Text style={style}>{children}</Text>
      </Link>
    </Container>
  );
};

export default LinkComponent;
