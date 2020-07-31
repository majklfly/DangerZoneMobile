import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ChapterButtonNegativeStyles = StyleSheet.create({
  buttonLayout: {
    flexDirection: "row",
    margin: 5,
  },
  indicator: {
    height: 130,
    width: 100,
    borderWidth: 3,
    borderRightWidth: 0,
    borderRadius: 10,
    left: 1,
    borderColor: "#FF7110",
    backgroundColor: "#fdbb77",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  textContainer: {
    height: 130,
    width: width - 150,
    borderWidth: 3,
    borderLeftWidth: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: "#FF7110",
    backgroundColor: "#fdbb77",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
  },
  title: {
    color: "black",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 26,
  },
  animation: {
    width: "100%",
    height: "70%",
    borderRadius: 50,
    left: "15%",
    top: "15%",
    zIndex: 10,
    position: "absolute",
  },
  coverLayer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "lightgrey",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    opacity: 0.4,
    zIndex: 5,
  },
  checked: {
    width: 40,
    height: 40,
    position: "absolute",
    right: 5,
    top: 5,
  },
});
