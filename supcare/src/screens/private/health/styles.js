import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.View`
  width: 100%;
  max-height: 100%;
  padding: 10px;
  margin-top: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Card = styled.View`
  width: 48%;
  max-height: 100%;
  padding: 14px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 1px 1px #555
`;

export const CarouselItem = styled.View`
  width: 100%;
  max-height: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const PaginationContainer = styled.View`
  position: absolute;
  top: 110%;
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

export const IconContainer = styled.View`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

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

export const ScrollViewContainer = styled.ScrollView`
  width: 100%;
  max-height: 100%;
`;

export const Text = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #000;
`;

export const ImageBannerContainer = styled.View`
  width: 100%;
  max-height: 100%;
  padding: 10px;
  border-radius: 10px;
  margin: 0 auto;
`;

export const ImageBanner = styled.Image`
  width: 100%;
  max-height: 100%;
  border-radius: 10px;
  object-fit: contain;
`;
