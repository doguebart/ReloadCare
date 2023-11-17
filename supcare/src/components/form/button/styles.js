import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  max-height: 100%;
  outline: none;
`;

export const Button = styled.TouchableOpacity`
  width: 50%;
  background-color: #66b567;
  padding: 18px;
  margin: 10px 0;
  border-radius: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: #fff;
`;

export const IconContainer = styled.View`
  margin-left: 2px;
`;
