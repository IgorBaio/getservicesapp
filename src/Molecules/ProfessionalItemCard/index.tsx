import React from "react";
import {
  Center,
  Stack,
} from "native-base";
import { ProfessionalItemCardProps } from "./types";
import {
  DescriptionText,
  Heading,
  Section,
  CardContainer,
} from "./styles";
import { getEllipsisText } from "../../functions/getEllipsisText";
import { View } from "react-native";
import { Services } from "../Services";
import { colors } from "../../Styles/theme";
import { UserImageArea } from "../../Organisms/UserImageArea";
import { useProfessional } from "../../stores/ProfessionalDetails";

export const ProfessionalItemCard = ({
  description,
  id,
  user,
  name,
  services,
  country,
  navigation
}: ProfessionalItemCardProps) => {
  const { setProfessional } = useProfessional(state => state)
  return (
    <CardContainer onPress={() => {
      setProfessional(user)
      navigation.navigate('DetailsScreen', { uid: id });
    }}>
      <View>
        <View>
          <UserImageArea user={user} />
          <Center
            bg={colors.yellowPrimary}
            position="absolute"
            bottom="2"
            px="3"
            py="1.5"
          >
            {country}
          </Center>
        </View>
        <Stack paddingY="4" paddingX="4" space={3}>
          <Stack space={2}>
            <Section heightPercentage="5%">
              <Heading>{getEllipsisText(name, 12)}</Heading>
            </Section>

            <Section heightPercentage="5%">
              <Services services={services} limit={4} />
            </Section>
          </Stack>
          <Section>
            <DescriptionText>
              {getEllipsisText(description, 60)}
            </DescriptionText>
          </Section>
        </Stack>
      </View>
    </CardContainer>
  );
};
