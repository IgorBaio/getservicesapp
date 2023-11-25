import styled from 'styled-components/native'
import { colors, scaledSize } from '../../Styles/theme'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

export const ContentContainer = styled.ScrollView`

`
export const ImageContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: ${heightPercentageToDP('2%')}px;
    margin-bottom: ${heightPercentageToDP('2%')}px;
`

export const ImageProfile = styled.Image`
    width: ${widthPercentageToDP('25%')}px;
    height: ${heightPercentageToDP('12%')}px;
    border-radius: 100px;
    margin-right: ${widthPercentageToDP('2%')}px;
`

export const EditImageButton = styled.TouchableOpacity`
    width: ${widthPercentageToDP('6%')}px;
    height: ${heightPercentageToDP('3%')}px;
    background-color: ${colors.whitePrimary};
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    margin-left: ${widthPercentageToDP('2%')}px;
`

export const SectionSeparator = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${colors.grayPrimary};
    margin-top: ${heightPercentageToDP('2%')}px;
    margin-bottom: ${heightPercentageToDP('2%')}px;
`

export const DataContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const NameEditContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;


`

export const NameTitle = styled.Text`
    font-size: ${scaledSize(24)}px;
    font-weight: bold;
    color: ${colors.blackPrimary};
    margin-right: ${widthPercentageToDP('2%')}px;
`

export const EditProfileDataButton = styled.TouchableOpacity`
    position: absolute;
    right: ${widthPercentageToDP('-15%')}px;
    top: 0;
    width: ${widthPercentageToDP('12%')}px;
    height: ${heightPercentageToDP('5%')}px;
    background-color: ${colors.whitePrimary};
    border-radius: 100px;
    justify-content: center;
    align-items: center;
`

export const TextEditProfileDataButton = styled.Text`
    font-size: ${scaledSize(16)}px;
    font-weight: bold;
`

export const CellphoneTitle = styled.Text`
    font-size: ${scaledSize(16)}px;
    font-weight: bold;
    color: ${colors.blackPrimary};
    margin-top: ${heightPercentageToDP('2%')}px;
`

export const CountryTitle = styled.Text`
    font-size: ${scaledSize(16)}px;
    font-weight: bold;
    color: ${colors.blackPrimary};
    margin-top: ${heightPercentageToDP('2%')}px;
`

export const ServicesBadgesContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: ${heightPercentageToDP('2%')}px;
`

export const ServiceBadge = styled.Text`
    font-size: ${scaledSize(12)}px;
    font-weight: bold;
    color: ${colors.whitePrimary};
    background-color: ${colors.violetPrimary};
    padding: ${heightPercentageToDP('1%')}px ${widthPercentageToDP('2%')}px;
    width: 20%;
    text-align: center;
    margin: ${heightPercentageToDP('1%')}px;
`

export const DescriptionContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${heightPercentageToDP('2%')}px;
    margin-bottom: ${heightPercentageToDP('2%')}px;
    padding: ${heightPercentageToDP('2%')}px ${widthPercentageToDP('2%')}px;
    border-radius: 10px;
`

export const DescripitionText = styled.Text`
    font-size: ${scaledSize(14)}px;
    font-weight: bold;
    color: ${colors.blackPrimary};
    text-align: center;
`