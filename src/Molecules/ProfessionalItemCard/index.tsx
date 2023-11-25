import React from "react";
import {
  AspectRatio,
  Box,
  Center,
  Image,
  Stack,
} from "native-base";
import { ProfessionalItemCardProps } from "./types";
import {
  DescriptionText,
  Heading,
  Section,
  ServicesText,
  ServicesContainer,
  AspectRadioView,
  CardContainer,
} from "./styles";
import { getEllipsisText } from "../../functions/getEllipsisText";
import { getEllipsisArrayText } from "../../functions/getEllipsisArrayText";
import { View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

export const ProfessionalItemCard = ({
  description,
  id,
  uri,
  name,
  services,
  country,
}: ProfessionalItemCardProps) => {
  return (
    <CardContainer>
      <View>
        <View>
          <AspectRadioView >
            <Image
              source={uri}
              size="container"
              resizeMode="contain"
              style={{
                width: widthPercentageToDP('10%'),
                height: heightPercentageToDP('15%'),
                aspectRatio: 1.5,
                resizeMode: "cover",
              }}
              alt="image"
            />
          </AspectRadioView>
          <Center
            bg="violet.500"
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
              <ServicesContainer>
                <ServicesText>{getEllipsisArrayText(services, 4)}</ServicesText>
              </ServicesContainer>
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
