import React, { useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "./components/Carousel";
import { DATA_CATALOGO } from "./components/data";
import {
  FeedContainer,
  GalleryContainer,
  HomeContainer,
  ScrollHome,
} from "./styles";
import { Gallery } from "../../Organisms/Gallery";
import { useUser } from "../../stores/User";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#363636",
    flex: 1,
  },
  drawerMenuIcon: {
    top: "-50%",
    right: "-90%",
  },
  textImage: {
    paddingHorizontal: "10%",
    top: 5,
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
    textDecorationLine: "underline",
  },
});

export function HomeStructure({ navigation }: any) {
  const { users } = useUser((state) => state);
  return (
    <HomeContainer>
      <FeedContainer>
        <GalleryContainer>
          <Gallery items={users || []} navigation={navigation} />
        </GalleryContainer>
      </FeedContainer>
    </HomeContainer>
  );
}
