import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ArticleSlideStyles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "#364d79",
    padding: 20,
    borderWidth: 20,
    borderColor: "#ff7110"
  },
  itemTitle: {
    color: "white",
    fontSize: 30,
    elevation: 5,
    alignSelf: "center",
    paddingTop: 50,
    fontFamily: "PermanentMarker"
  },
  itemContent: {
    color: "white",
    fontSize: 14,
    alignSelf: "flex-start",
    paddingTop: 10,
    fontFamily: "PTSans"
  }
});
