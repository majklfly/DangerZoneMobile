import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ChapterButtonNegativeStyles = StyleSheet.create({
  buttonLayout: {
    flexDirection: "row",
    margin: 5
  },
  indicator: {
    height: 130,
    width: 100,
    borderWidth: 3,
    borderRightWidth: 0,
    borderRadius: 10,
    borderColor: "#660000",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  textContainer: {
    height: 130,
    width: width - 150,
    borderWidth: 3,
    borderLeftWidth: 0,
    borderColor: "#660000",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "black",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 26
  }
});
