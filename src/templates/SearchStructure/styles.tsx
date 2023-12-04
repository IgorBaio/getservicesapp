import styled from 'styled-components/native'
import { colors, scaledSize } from '../../Styles/theme'
import { CheckBoxStructureProps, ScrollSearchProps } from './types'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'


export const SearchContainer = styled.View`
    flex: 1;
    background-color: ${colors.whitePrimary};

`

export const ScrollSearch = styled.ScrollView<ScrollSearchProps>`
    margin-bottom: 3px;
    `

export const FeedContainer = styled.View`
`
export const GalleryContainer = styled.View`
justify-content: center;
align-items: center;
`

export const InputContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: ${heightPercentageToDP('10%')}px;
    margin-left: ${widthPercentageToDP('5%')}px;
    margin-right: ${widthPercentageToDP('5%')}px;

    
`

export const InputSearch = styled.TextInput`
    width: 100%;
    height: ${heightPercentageToDP('6%')}px;
    background-color: ${colors.whitePrimary};
    border-radius: 10px;
    padding: 0 10px;
    font-size: ${scaledSize(14)}px;
    color: #000;
    border: 1px solid ${colors.grayPrimary};
`

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
    background-color: ${({ isSelected }: CheckBoxStructureProps) => isSelected ? colors.violetPrimary : colors.whitePrimary};
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid ${colors.blackPrimary};

`

export const InputCheckBoxLabel = styled.Text`
    font-size: ${scaledSize(14)}px;
    color: #000;
    font-weight: 400;
`  