import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView``;

export const Title = styled.Text`
  width: 60%;
  margin-top: 60px;
  margin-left: 20px;
  margin-bottom: 60px;
  font-size: 30px;
  font-weight: 600;
  margin-right: 14px;
  color: #66b567;
`;

export const TitleContainer = styled.View`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextContainer = styled.View`
  width: 100%;
  max-height: 100%;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #66b567;
`;

export const InputContainer = styled.View`
  width: 100%;
  max-height: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

export const ScrollViewContainer = styled.ScrollView`
  width: 100%;
  max-height: 100%;
`;

export const Form = styled.View`
  width: 100%;
  max-height: 100%;
  padding: 0 20px;
  display: flex;
  justify-self: center;
  flex-direction: column;
`;

export const CardContainer = styled.View`
  width: 100%;
  max-height: 100%;
  padding: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Card = styled.TouchableOpacity`
  width: 48%;
  height: 150px;
  padding: 14px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 1px 1px #999;
`;

export const IconContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const ButtonContainer = styled.View`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
