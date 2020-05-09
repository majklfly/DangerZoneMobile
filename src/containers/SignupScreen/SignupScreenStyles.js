import React from "react";
import { StyleSheet } from "react-native";

export const SignupScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end"
  },
  formContainer: {
    justifyContent: "center",
    marginHorizontal: 10,
    padding: 13
  },
  signupButton: {
    marginHorizontal: 40,
    backgroundColor: "#FF7110",
    borderRadius: 10
  },
  stretch: {
    width: 300,
    height: 300,
    resizeMode: "stretch",
    borderRadius: 100,
    left: 50
  },
  link: {
    alignSelf: "center",
    marginTop: 10
  }
});
