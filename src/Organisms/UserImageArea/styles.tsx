import {
  widthPercentageToDP,
} from "react-native-responsive-screen";
import styled from "styled-components/native";

export const AspectRadioView = styled.View`
  aspect-ratio: 1.2;
  width: ${widthPercentageToDP('45%')}px;
`
