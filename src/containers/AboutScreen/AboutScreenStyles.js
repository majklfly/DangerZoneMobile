import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const AboutScreenStyles = StyleSheet.create({
  mainContainer: {
    height: height,
    position: "relative",
  },
  container: {
    height: height - 100,
    width: width - 40,
    backgroundColor: "#364d79",
    borderWidth: 2,
    borderColor: "#ff7110",
    alignSelf: "center",
    marginTop: 60,
  },
  title: {
    color: "white",
    fontSize: 35,
    fontFamily: "MontSerrat",
    alignSelf: "center",
    marginTop: 30,
  },
  contentContainer: {
    width: "85%",
    height: "80%",
    overflow: "hidden",
    top: "5%",
    alignSelf: "center",
  },
  content: {
    color: "white",
    fontFamily: "MontSerrat",
    paddingVertical: 10,
  },
  link: {
    color: "white",
    fontFamily: "MontSerrat",
    alignSelf: "center",
    paddingVertical: 10,
  },
  picture1: {
    width: 80,
    height: 80,
  },
  picture2: {
    width: width / 2,
    height: height / 12,
    marginLeft: 10,
  },
  imagesContainer: {
    display: "flex",
    flexDirection: "row",
  },
});
