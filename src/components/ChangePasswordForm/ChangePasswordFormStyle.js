import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ChangePasswordFormStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: "5%",
    backgroundColor: "#fdbb77",
    borderRadius: 10,
  },
  icon: {
    fontSize: 40,
    opacity: 0.6,
    alignSelf: "flex-end",
    padding: 10,
    marginRight: 10,
    marginBottom: "15%",
  },
  input: {
    width: "80%",
    height: 60,
    borderColor: "darkgrey",
    borderWidth: 2,
    alignSelf: "center",
    borderRadius: 10,
    textAlign: "center",
    fontFamily: "MontSerrat",
    color: "darkgrey",
    marginBottom: 40,
  },
  label: {
    padding: 5,
    marginLeft: "10%",
    fontFamily: "MontSerrat",
    color: "black",
    fontSize: 15,
  },
});
