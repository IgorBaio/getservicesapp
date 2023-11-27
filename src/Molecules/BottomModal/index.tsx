import React, { useEffect, useState } from "react";
import { PageContainerProps } from "./types";
import { Container, ContainerButton, ContentContainer, DismissButton, DismissContainer, DismissText, ModalContainer } from "./styles";
import { Animated, Easing, KeyboardAvoidingView, Modal, Platform, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../Styles/theme";

export function BottomModal({ children, modalVisible, setModalVisible, content, title }: any) {

  const animated = true
  const [showed, setShowed] = useState(false);

  const [animationBackground, setAnimationBackground] = useState(new Animated.Value(0));
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const showAnimationBackground = () => {
    Animated.timing(animationBackground, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false
    }).start()
  }

  const dismissModal = () => {
    Animated.timing(animationBackground, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false
    }).start(() => {
      setAnimationBackground(new Animated.Value(0));
      setModalVisible(!modalVisible);
    });
  }

  const animate = () => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 600,
      easing: Easing.elastic(1.1),
      useNativeDriver: true
    }).start();
  };

  useEffect(() => {
    if (!modalVisible) {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 600,
        easing: Easing.elastic(1.1),
        useNativeDriver: true
      }).start();
      setShowed(false);
    } else {

    }
  }, [modalVisible]);

  const backgroundInterpolation = animationBackground.interpolate({
    inputRange: [0, 1],
    outputRange: ["#66666600", "#66666670"]
  });

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={dismissModal}
        onShow={showAnimationBackground}
        statusBarTranslucent={true}
        accessible
        accessibilityViewIsModal
      >
        <Animated.View style={[styles.wrapperModal, {
          backgroundColor: backgroundInterpolation
        }]}>
          <ContainerButton activeOpacity={1}  onPress={() => dismissModal()}>
            <ContentContainer >
              <DismissContainer>
                <ModalContainer style={styles.modalView} accessible accessibilityViewIsModal>
                  <KeyboardAwareScrollView
                    keyboardOpeningTime={100}
                    enableOnAndroid
                    accessible
                    contentContainerStyle={styles.contentContainer}
                  >
                    <DismissButton
                      onPress={() => dismissModal()}
                    >
                      <Ionicons name="ios-arrow-back-circle" size={24} color={colors.violetPrimary} />
                      <DismissText style={styles.textModalClose}>{' '}Voltar</DismissText>
                    </DismissButton>
                    <ScrollView style={styles.scrollView}>
                      <Text style={styles.textModalTitle}>{title}</Text>
                      {content}
                    </ScrollView>
                  </KeyboardAwareScrollView>
                </ModalContainer>
              </DismissContainer>
            </ContentContainer>


          </ContainerButton>
        </Animated.View>
      </Modal>

      {children}
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  scrollView: {
    marginTop: 20,
  },
  contentContainer: {
    marginBottom: 25
  },
  wrapperModal: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  centeredView: {
    marginTop: 100,//scaleHeight(100),
    flex: 1,
    justifyContent: 'flex-end'
  },
  modalView: {
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textModalClose: {
    fontSize: 16,//scaleHeight(16),
    // fontFamily: FONTS.MONTSERRAT.LIGHT,
    color: colors.violetPrimary,
    fontWeight: "300",
    marginRight: 5
  },
  textModalTitle: {
    // fontFamily: FONTS.MULISH.EXTRA,
    fontSize: 18,//scaleHeight(18),
    color: colors.violetPrimary,
    fontWeight: "bold",
    marginBottom: 10,//scaleHeight(10),
  },
  textModalBody: {
    // fontFamily: FONTS.MONTSERRAT.LIGHT,
    fontWeight: "300",
    color: '#666',//colors.gray,
    fontSize: 16,//scaleHeight(16),
  },
});