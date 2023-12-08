import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import styled from "styled-components/native";
import { colors } from "../../Styles/theme";
import { InputProps } from "./types";

export const InputGenericContainer = styled.View`
     width: 100%;
    height: 20%;
    justify-content: center;
    align-items: center;
`;

export const InputGeneric = styled.TextInput`
    width: 80%;
    height: 50px;
    border-radius: 10px;
    background-color: ${colors.bluePrimary};
    color: ${({ isFocused }: InputProps) => isFocused ? colors.yellowPrimary : colors.whitePrimary};
    padding: 10px;
    margin-top: ${({ marginTop }: InputProps) => heightPercentageToDP(marginTop || 0)}px;

`;


