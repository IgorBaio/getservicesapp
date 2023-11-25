import styled from 'styled-components/native'
import { colors, scaledSize } from '../../Styles/theme'
import { ScrollHomeProps } from './types'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'


export const HomeContainer = styled.View`
    flex: 1;
    background-color: ${colors.whitePrimary};

`

export const ScrollHome = styled.ScrollView<ScrollHomeProps>`
    
    /* padding-bottom: ${({paddingBottom}) => paddingBottom ? '130px': '100%'}; */
    margin-bottom: 3px;
    `

export const FeedContainer = styled.View`
    margin: ${heightPercentageToDP('5%')}px 0;
`
export const GalleryContainer = styled.View`
justify-content: center;
align-items: center;
`