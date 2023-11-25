import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import styled from "styled-components/native";
import { SectionProps } from "./types";

export const DescriptionText = styled.Text`
  color: #000;
`;

export const Section = styled.View<SectionProps>`
  position: relative;
  height: ${({ heightPercentage }: SectionProps) =>
    heightPercentageToDP(heightPercentage || "10%")}px;
`;
export const ServicesContainer = styled.View``;

export const Heading = styled.Text`
  font-size: 18px;
  font-weight: 800;
  line-height: 35px;
  color: #000;
`;

export const ServicesText = styled.Text`
  color: violet;
  font-weight: 500;
  font-size: 14px;
`;

export const AspectRadioView = styled.View`
  aspect-ratio: 1.2;
  width: ${widthPercentageToDP('45%')}px;
`

export const CardContainer = styled.View`
  /* width: ${widthPercentageToDP('45%')}px; */
  /* height: ${heightPercentageToDP('40%')}px; */
  margin: 5px;
  border-radius: 10px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ccc;

  
`