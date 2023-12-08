import styled from 'styled-components/native'
import { colors, scaledSize } from '../../Styles/theme'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { CheckBoxStructureProps } from './types'


export const InputCheckBoxContainer = styled.TouchableOpacity`
    width: 100%;
    height: ${heightPercentageToDP('7%')}px;
    justify-content: flex-start;
    align-items: center;
    background-color: ${colors.whitePrimary};
    border-radius: 10px;
    flex-direction: row;
    position: relative;
    margin: ${heightPercentageToDP('1%')}px 0;
    padding: 0 10px;
`

export const InputCheckBox = styled.View<CheckBoxStructureProps>`
    width: 7%;
    height: 45%;
    justify-content: center;
    align-items: center;
    background-color: ${({isSelected}: CheckBoxStructureProps)=> isSelected ? colors.bluePrimary : colors.whitePrimary};
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid ${colors.yellowPrimary};
`

export const InputCheckBoxLabel = styled.Text`
    font-size: ${scaledSize(14)}px;
    color: #000;
    font-weight: 400;
`  
