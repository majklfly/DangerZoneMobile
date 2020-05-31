import React from "react";
import { StyleSheet } from "react-native";

export const SigninScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  stretch: {
    width: 300,
    height: 300,
    resizeMode: "stretch",
    borderRadius: 100,
    left: 50
  },
  formContainer: {
    justifyContent: "center",
    marginHorizontal: 10,
    padding: 13
  },
  signinButton: {
    marginHorizontal: 40,
    backgroundColor: "#FF7110",
    borderRadius: 10,
    width: 250,
    alignSelf: "center"
  }
});
