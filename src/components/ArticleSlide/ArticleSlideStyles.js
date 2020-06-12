import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ArticleSlideStyles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 40,
    height: height,
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderWidth: 3,
    borderColor: "#ff7110"
  },
  itemTitle: {
    color: "black",
    fontSize: 30,
    elevation: 5,
    alignSelf: "center",
    paddingTop: 50,
    fontFamily: "PermanentMarker"
  },
  itemContent: {
    color: "black",
    fontSize: 14,
    alignSelf: "flex-start",
    paddingTop: 10,
    fontFamily: "PTSans"
  },
  button: {
    backgroundColor: "#ff7110",
    fontSize: 30
  }
});
