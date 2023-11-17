import React, { useState } from "react";
import { Container, Input, ErrorMessage } from "./styles";

const SelectComponent = (props) => {
  const {
    type,
    name,
    onChangeText,
    value,
    placeholder,
    secureTextEntry,
    errorMessage,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Container>
      <Input
        type={type}
        name={name}
        onChangeText={onChangeText}
        value={value}
        isError={!!errorMessage}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={{
          borderBottomColor: errorMessage
            ? "red"
            : isFocused
            ? "#66b567"
            : "#cdcdcd",
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default SelectComponent;
