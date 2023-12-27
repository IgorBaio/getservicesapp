import Animated from 'react-native-reanimated';
import styled from 'styled-components/native'

import { TouchProps } from './types';

export const Modal = styled.Modal``;

export const Background = styled.View`
	flex: 1;
	background-color: rgba(000, 000, 000, 0.5);
	padding: 0 10px;
`;

export const SafeArea = styled.SafeAreaView`
	flex: 1;
	justify-content: flex-end;
`;

export const AnimatedView = styled(Animated.View)`
	width: 100%;
	border-radius: 25px;
	padding: 10px 20px;
	background-color: #1F1F1F;
`;

export const Indicator = styled.View`
	width: 40px;
	height: 5px;
	margin-bottom: 15px;
	border-radius: 10px;
	align-self: center;
	background-color: grey;
`;

export const Touch = styled.TouchableOpacity<TouchProps>`
	width: 100%;
	padding: 20px 0;
	align-items: center;
	border-radius: 15px;
	background-color: ${({ backgroundColor }: TouchProps) => backgroundColor};
`;

export const TitleContainer = styled.View`
	width: 100%;
`;
