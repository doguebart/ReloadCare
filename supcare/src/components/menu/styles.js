import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  background-color: #66b567;
`;

export const IconContainer = styled.TouchableOpacity`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconText = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
`;
