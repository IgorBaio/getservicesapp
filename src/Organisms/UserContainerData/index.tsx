import React from "react";
import {
  CellphoneTitle,
  CountryTitle,
  DataContainer,
  DescripitionText,
  DescriptionContainer,
  ImageContainer,
  LabelContainer,
  LabelText,
  NameEditContainer,
  NameTitle,
  ServiceBadge,
  ServicesBadgesContainer,
  WhatsappArea,
  WhatsappButton,
  WhatsappNumber,
} from "./styles";
import { UserImageArea } from "../UserImageArea";
import { FontAwesome } from '@expo/vector-icons';
import { colors } from "../../Styles/theme";
import { Linking } from "react-native";

function UserContainerData({ state }: any) {

  const sendWppMessage = (number: string) => {
    const url =
      `whatsapp://send?text=GET_SERVICES_APP: Olá, gostaria de contratar seus serviços&phone=${number}`;
    Linking.openURL(url)
      .then(data => {
        console.log('opened');
      })
      .catch(err => console.log('err', err));
  };

  return (
    <DataContainer>
      <ImageContainer>

          <UserImageArea user={state} />
      </ImageContainer>

      <LabelContainer>
        <LabelText>Nome:</LabelText>
      </LabelContainer>
      <NameEditContainer>

        <NameTitle>{state.displayName}</NameTitle>
      </NameEditContainer>
      <LabelContainer>
        <LabelText>Telefone:</LabelText>
      </LabelContainer>
      <CellphoneTitle>{state.phoneNumber}</CellphoneTitle>
      <LabelContainer>
        <LabelText>País:</LabelText>
      </LabelContainer>
      <CountryTitle>{state.country}</CountryTitle>
      <LabelContainer>
        <LabelText>Services:</LabelText>
      </LabelContainer>
      <ServicesBadgesContainer>
        {state?.services?.map((service, index) => {
          return <ServiceBadge key={index}>{service}</ServiceBadge>
        })
        }
      </ServicesBadgesContainer>
      <DescriptionContainer>
        <LabelContainer>
          <LabelText>Description:</LabelText>
        </LabelContainer>
        <DescripitionText>{state.description}</DescripitionText>
      </DescriptionContainer>
      <WhatsappArea>
            <WhatsappButton onPress={()=>sendWppMessage(state.phoneNumber)}>
            <FontAwesome name="whatsapp" size={32} color={colors.whitePrimary} />
            <WhatsappNumber>
              Whatsapp
            </WhatsappNumber>
            </WhatsappButton>
          </WhatsappArea>

    </DataContainer>

  );
}

export default UserContainerData;