import styled from 'styled-components/native'
import { colors, scaledSize } from '../../Styles/theme'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { CountriesListProps } from './types'

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
    /* justify-content: center; */
    align-items: center;
    height: ${heightPercentageToDP('100%')}px;
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
    background-color: red;
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


export const InputName = styled.TextInput`
    width: 80%;
    height: 50px;
    border-radius: 10px;
    background-color: ${colors.graySecondary};
    padding: 10px;
    margin-top: 10px;
`;

export const InputCellphone = styled.TextInput`
    width: 80%;
    height: 50px;
    border-radius: 10px;
    background-color: ${colors.graySecondary};
    padding: 10px;
    margin-top: 10px;
`;

export const InputCountry = styled.TextInput`
    width: 80%;
    height: 50px;
    border-radius: 10px;
    background-color: ${colors.graySecondary};
    padding: 10px;
    margin: 10px 0;
`;

export const CountryContainer = styled.View`
    flex-direction: column;
    align-items: center; 
    width: 100%;
    height: 50px;
    border-radius: 10px;
    margin-top: 10px;
    position: relative;
`;

export const CountriesList = styled.FlatList<CountriesListProps>`
    width: 80%;
    height: ${({height} : CountriesListProps)=>heightPercentageToDP(!!height ? `${height*10}%` : '30%')}px;
    border-radius: 10px;
    background-color: ${colors.graySecondary};
    padding: ${heightPercentageToDP('2%')}px ${widthPercentageToDP('2%')}px;
    padding-top: 0px;
    position: absolute;
    top: 70px;
    bottom: 120px;
    margin-bottom: 70px;
    z-index: 999;
`;

export const CountryButtonSelect = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background-color: ${colors.violetPrimary};
    padding: 10px;
`;

export const CountryItem = styled.Text`
    font-size: ${scaledSize(16)}px;
    font-weight: bold;
    color: ${colors.blackPrimary};
`

export const ServicesMultiValueInput = styled.TextInput`
    width: 80%;
    height: 50px;
    border-radius: 10px;
    background-color: ${colors.graySecondary};
    padding: 10px;
    margin-top: 10px;
`;

export const ServiceBadgeInput = styled.TouchableOpacity`
   font-size: ${scaledSize(12)}px;
    font-weight: bold;
    color: ${colors.whitePrimary};
    background-color: ${colors.violetPrimary};
    padding: ${heightPercentageToDP('1%')}px ${widthPercentageToDP('2%')}px;
    text-align: center;
    height: 80%;
    margin: ${heightPercentageToDP('1%')}px;
    flex-direction: row;
    justify-content: flex-start;

    align-items: center;
`;

export const ServiceBadgeInputText = styled.Text`
    font-size: ${scaledSize(12)}px;
    font-weight: bold;
    color: ${colors.whitePrimary};
    text-align: center;
    margin-right: 10px;
`;

export const DescripitionInput = styled.TextInput`
    width: 80%;
    height: 100px;
    border-radius: 10px;
    background-color: ${colors.graySecondary};
    padding: 10px;
    margin-top: 20px;
`;


export const CheckBoxContainer = styled.View`
    width: 80%;
`;

export const LabelContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    width: ${widthPercentageToDP('80%')}px;
`;

export const LabelText = styled.Text`
    font-size: ${scaledSize(24)}px;
    font-weight: bold;
    color: ${colors.blackPrimary};
    margin-left: 10px;
`;


export const ButtonSaveContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const ButtonSave = styled.TouchableOpacity`
    width: 40%;
    height: 50px;
    border-radius: 10px;
    background-color: ${colors.violetPrimary};
    padding: 10px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const SaveText = styled.Text`
    font-size: ${scaledSize(16)}px;
    font-weight: bold;
    color: ${colors.whitePrimary};
    margin-right: 10px;
`;