import styled from 'styled-components/native'
import { colors } from '../../Styles/theme'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

export const HeaderContainer = styled.View`
    position: absolute;
    top: ${heightPercentageToDP('4%')}px;
    height: ${heightPercentageToDP('10%')}px;
    width: ${widthPercentageToDP('100%')}px;
    justify-content: space-between;
    align-items: start;
    flex-direction: row;
`;

export const BackButtonContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    flex-direction: row;

`;

export const BackText = styled.Text`
    color: ${colors.greenPrimary};
    font-size: ${heightPercentageToDP('2%')}px;
`;

export const ContentContainer = styled.View`
    margin-top: ${heightPercentageToDP('10%')}px;
    justify-content: center;
    align-items: center;
`;

export const WhatsappArea = styled.View`
    width: 100%;
    height: 20%;
    justify-content: center;
    align-items: center;
`;

export const WhatsappButton = styled.TouchableOpacity`
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