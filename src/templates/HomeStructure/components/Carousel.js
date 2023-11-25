import React from "react";
import { Card } from "react-native-paper";
import { FlatList, Image, ScrollView, Text, StyleSheet } from "react-native";
import { DATA_DESTAQUE } from "./data";

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
  },
  textImage: {
    paddingHorizontal: "10%",
    top: 5,
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
    textDecorationLine: "underline",
  },
});

export default () => {
  return (
    <ScrollView horizontal style={{ marginBottom: 20 }}>
      {DATA_DESTAQUE.map((item, index) => {
        return (
          <Card
            key={index}
            style={{
              marginBottom: 10,
              marginLeft: 5,
              marginRight: 5,
              elevation: 4,
              backgroundColor: "#626262",
              marginHorizontal: 30,
            }}
          >
            <Card.Content>
              <Card.Cover
                source={item.uri}
                style={{
                  width: 125,
                  height: 150,
                  aspectRatio: 1.5,
                  resizeMode: "contain",
                  marginHorizontal: 5,
                }}
              />
              <Text style={styles.textImage}>{item.name}</Text>
            </Card.Content>
          </Card>
        );
      })}
    </ScrollView>
  );
};
