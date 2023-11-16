import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const CarouselItem = styled.View`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Image = styled.Image`
  width: 100%;
  height: 70%;
  top: 10%;
  object-fit: cover;
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

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 600;
  top: 14%;
  color: #66b567;
`;

export const PaginationContainer = styled.View`
  position: absolute;
  top: 8%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PaginationDot = styled.View`
  width: ${(props) => (props.active ? "10px" : "8px")};
  height: ${(props) => (props.active ? "10px" : "8px")};
  border-radius: ${(props) => (props.active ? "5px" : "4px")};
  background-color: ${(props) => (props.active ? "#66b567" : "#B4C3D2")};
  margin: 0 5px;
`;
