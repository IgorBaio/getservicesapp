import { StyleSheet } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { ProfessionalItemCard } from "../../Molecules/ProfessionalItemCard";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { scaledSize } from "../../Styles/theme";
import React from "react";

export const Gallery = ({ items, navigation }: any) => {
  console.log("items.length", items.length);
  return (
    <FlatGrid
      itemDimension={125}
      data={items}
      style={styles.gridView}
      staticDimension={400}
      spacing={10}
      renderItem={({ item }) => (
        <ProfessionalItemCard
          id={item.id}
          country={item.country}
          description={item.description}
          name={item.displayName}
          services={item.services}
          uri={item.photoURL}
          key={`${item.id}`}
        />
      )}
      contentContainerStyle={styles.itemContainer}
    />
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    height: heightPercentageToDP("100%"),
    // padding: scaledSize(35), //TODO responsavel por deixar alinhado
    marginBottom: heightPercentageToDP("42%"),
    padding: 0,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    resizeMode: "contain",
    maxWidth: widthPercentageToDP("100%"),
    backgroundColor: "#363636",
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
});
