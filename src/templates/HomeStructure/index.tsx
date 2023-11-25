import React from "react";
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
  return (
    <HomeContainer>
      <FeedContainer>
        <GalleryContainer>
          <Gallery items={DATA_CATALOGO || []} navigation={navigation} />
        </GalleryContainer>
      </FeedContainer>
    </HomeContainer>
  );
}
