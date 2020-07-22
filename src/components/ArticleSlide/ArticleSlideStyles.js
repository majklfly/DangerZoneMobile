import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ArticleSlideStyles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 40,
    height: height - 100,
    backgroundColor: "#364d79",
    padding: 20,
    marginTop: 60,
    margin: 20,
    borderWidth: 3,
    borderColor: "#ff7110",
    elevation: 10,
  },
  itemTitle: {
    color: "white",
    fontSize: 30,
    elevation: 5,
    alignSelf: "center",
    paddingTop: 30,
    fontFamily: "MontSerrat",
    textAlign: "center",
  },
  itemContent: {
    color: "white",
    paddingVertical: 5,
    fontFamily: "MontSerrat",
  },
  button: {
    backgroundColor: "#ff7110",
    fontSize: 30,
  },
  itemContentContainer: {
    marginTop: 10,
    overflow: "hidden",
  },
});
