import React from 'react';
import { Modal, Text } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import {
	runOnJS,
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming,
} from 'react-native-reanimated';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AnimatedView, Background, Indicator, SafeArea, TitleContainer, Touch } from './styles';
import { AlertModalProps } from './types';

export function AlertModal({
	title,
	visible,
	onConfirm,
	onCancel,
	onSwipeCancel,
}: AlertModalProps) {
	const insets = useSafeAreaInsets();

	const startingPosition = insets.bottom > 0 ? 0 : -10;
	const hiddePosition = hp('40%');
	const y = useSharedValue(hiddePosition);

	React.useEffect(() => {
		if (!visible && y.value > 0) y.value = withSpring(hiddePosition);
		if (visible) {
			y.value = withSpring(startingPosition);
		}
	}, [visible]);

	const eventHandler = useAnimatedGestureHandler({
		onActive: event => {
			if (event.translationY < 0) return;
			y.value = event.translationY;
		},
		onEnd: event => {
			if (event.translationY >= 110) {
				runOnJS(onSwipeCancel)();
				y.value = withTiming(hiddePosition, {
					duration: 500,
				});
			} else {
				y.value = withSpring(startingPosition);
			}
		},
	});

	const translationY = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: y.value }],
		};
	});

	return (
		<Modal visible={visible} transparent>
			<Background>
				<GestureHandlerRootView style={{ flex: 1 }}>
					<SafeArea>
						<PanGestureHandler onGestureEvent={eventHandler}>
							<AnimatedView style={translationY}>
								<Indicator />
								<TitleContainer>
									<Text
										style={{
											fontSize: 25,
											fontWeight: 'bold',
											marginBottom: 15,
											textAlign: 'center',
											color: 'white'
										}}
									>
										{title}
									</Text>
								</TitleContainer>
								<Touch
									backgroundColor="#A5AADE"
									onPress={() => {
										y.value = withTiming(
											hiddePosition,
											{
												duration: 300,
											},
											finished => {
												if (finished) runOnJS(onConfirm)();
											},
										);
									}}
								>
									<Text style={{ color: 'white' }}>
										Confirm
									</Text>
								</Touch>
								<Touch
									backgroundColor="transparent"
									onPress={() => {
										y.value = withTiming(
											hiddePosition,
											{
												duration: 300,
											},
											finished => {
												if (finished) runOnJS(onCancel)();
											},
										);
									}}
								>
									<Text style={{ color: 'white' }}>
										Cancel
									</Text>
								</Touch>
							</AnimatedView>
						</PanGestureHandler>
					</SafeArea>
				</GestureHandlerRootView>
			</Background>
		</Modal>
	);
}
