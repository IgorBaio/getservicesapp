import React, { memo } from "react";
import { BackButtonContainer, BackText, ContentContainer, HeaderContainer } from "./styles";
import { PageContainer } from "../../Molecules/PageContainer";
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from "../../Styles/theme";
import { useProfessional } from "../../stores/ProfessionalDetails";
import UserContainerData from "../../Organisms/UserContainerData";

function ProfessionalDetailsStructure({ navigation, user }: any) {
  const { professional } = useProfessional(state => state)
  console.log('professional', professional)

  return (
    <PageContainer>
      <>
        <HeaderContainer>
          <BackButtonContainer onPress={()=> navigation.goBack()}>
            <MaterialIcons name="arrow-left" size={32} color={colors.greenPrimary} />
            <BackText>Voltar</BackText>
          </BackButtonContainer>

        </HeaderContainer>

        <ContentContainer>
          <UserContainerData state={professional} />
          
        </ContentContainer>

      </>
    </PageContainer>
  );
}

export default memo(ProfessionalDetailsStructure);