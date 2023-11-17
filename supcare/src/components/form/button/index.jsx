import React from "react";
import { Container, Button, Text, IconContainer } from "./styles";
import Icon from "react-native-vector-icons/Feather";

const ButtonComponent = (props) => {
  const { onPress, style, children, icon } = props;

  return (
    <Container>
      <Button style={style} onPress={onPress}>
        <Text>{children}</Text>
        {icon && (
          <IconContainer>
            <Icon
              name={icon}
              size={20}
              color="#fff"
              style={{ marginLeft: 4 }}
            />
          </IconContainer>
        )}
      </Button>
    </Container>
  );
};

export default ButtonComponent;
