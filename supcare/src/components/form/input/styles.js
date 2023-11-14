import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  max-height: 100%;
  outline: none;
`;

export const Input = styled.TextInput`
  width: 100%;
  color: #999;
  border-bottom-width: 2px;
  border-bottom-color: #eaeaea;
  padding: 10px 0;
`;

export const ErrorMessage = styled.Text`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
