import React from "react";
import {
  Image,
} from "native-base";
import { UserImageAreaProps } from "./types";
import {
  AspectRadioView,
} from "./styles";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { setPhotoURL } from "../../functions/setPhoto";

export const UserImageArea = ({
  user,
}: UserImageAreaProps) => {
  return (
    <AspectRadioView >
      <Image
        source={setPhotoURL(user)}
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

  );
};
