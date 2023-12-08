import { widthPercentageToDP } from "react-native-responsive-screen";
import styled from "styled-components/native";
import { colors } from "../../Styles/theme";

export const ButtonGenericContainer = styled.View`
    width: 100%;
    height: 20%;
    justify-content: center;
    align-items: center;
`;

export const ButtonGeneric = styled.TouchableOpacity`
    width: ${widthPercentageToDP('80%')}px;
    height: 50px;
    border-radius: 100px;
    background-color: ${colors.bluePrimary};
    justify-content: center;
    align-items: center;
    flex-direction: row;

`;

export const GenericText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${colors.whitePrimary};
    margin-left: ${widthPercentageToDP('5%')}px;
    justify-content: center;
    align-items: center;
`;
