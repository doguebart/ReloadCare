import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
`;

export const Title = styled.Text`
  width: 60%;
  margin-left: 20px;
  margin-bottom: 60px;
  font-size: 30px;
  font-weight: 600;
  margin-right: 14px;
  color: #66b567;
`;

export const LinkContainer = styled.TouchableOpacity`
  max-width: 100%;
  max-height: 100%;
  margin: 40px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  flex-direction: column;
`;
