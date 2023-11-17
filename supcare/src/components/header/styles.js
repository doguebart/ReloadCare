import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0px 1px 2px #999;
  background-color: #66b567;
`;

export const UserContainer = styled.TouchableOpacity`
  max-width: 100%;
  max-height: 100%;
  top: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

export const TextContainer = styled.View`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  opacity: 0.7;
`;

export const IconContainer = styled.TouchableOpacity`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  top: 20%;
  flex-direction: row;
`;