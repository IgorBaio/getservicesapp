import React from "react";
import { Container } from "../../Molecules/PageContainer/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { CellphoneTitle, ContentContainer, CountryTitle, DataContainer, DescripitionText, DescriptionContainer, EditImageButton, EditProfileDataButton, ImageContainer, ImageProfile, NameEditContainer, NameTitle, SectionSeparator, ServiceBadge, ServicesBadgesContainer } from "./styles";

export function ProfileStructure({ navigation }: any) {
  const services = ['servico 1', 'servico 2', 'servico 3', 'servico 1', 'servico 2', 'servico 3', 'servico 1', 'servico 2', 'servico 3']
  return (
    <Container>
      <ContentContainer>
        <ImageContainer>
          <ImageProfile />
          <EditImageButton>
            <MaterialIcons name="mode-edit" size={24} color="black" />
          </EditImageButton>
        </ImageContainer>
        <SectionSeparator />
        <DataContainer>
          <NameEditContainer>

            <NameTitle>Fulano de Tal</NameTitle>
            <EditProfileDataButton>
              <MaterialIcons name="mode-edit" size={24} color="black" />
            </EditProfileDataButton>
          </NameEditContainer>
          <CellphoneTitle>(11) 99999-9999</CellphoneTitle>
          <CountryTitle>Brasil</CountryTitle>
          <ServicesBadgesContainer>
            {services.map((service, index) => {
              return <ServiceBadge key={index}>{service}</ServiceBadge>
            })
            }
          </ServicesBadgesContainer>
          <DescriptionContainer>
            <DescripitionText>You might have used position: absolute with overflow: hidden. This combination doesn’t work because position: absolute moves the targeted element out of context with the document structure </DescripitionText>
          </DescriptionContainer>
        </DataContainer>
      </ContentContainer>
    </Container>
  );
}
