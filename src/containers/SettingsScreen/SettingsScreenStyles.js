import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const SettingsScreenStyles = StyleSheet.create({
  mainContainer: {
    height: height,
    position: "relative",
  },
  changePassword: {
    position: "absolute",
    top: 100,
    width: width * 0.7,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    elevation: 15,
    height: 50,
    backgroundColor: "#364d79",
  },
  buttonTitle: {
    color: "white",
    fontFamily: "MontSerrat",
  },
});
