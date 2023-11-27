import styled from 'styled-components/native'
import { colors } from '../../Styles/theme'

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.whitePrimary};
`

export const ContainerButton = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

export const ContentContainer = styled.View`
    margin-top: 100;
    flex: 1;
    justify-content: flex-end;
`

export const DismissContainer = styled.View`
`

export const ModalContainer = styled.View`
    background-color: ${colors.whitePrimary};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-top: 20px;
    padding-bottom: 40px;
    padding-left: 35px;
    padding-right: 35px;
`

export const DismissButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`

export const DismissText = styled.Text`
    font-size: 16px;
    color: ${colors.violetPrimary};
    margin-left: 10px;
`