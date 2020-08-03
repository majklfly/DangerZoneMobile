import React from "react";
import { StyleSheet } from "react-native";

export const SignupScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  formContainer: {
    justifyContent: "center",
    width: "90%",
    position: "absolute",
    alignSelf: "center",
    top: "10%",
  },
  signupButton: {
    marginHorizontal: 40,
    backgroundColor: "#FF7110",
    borderRadius: 10,
    elevation: 15,
    marginBottom: 40,
    width: 250,
    alignSelf: "center",
  },
  errorMessage: {
    position: "relative",
    top: -30,
    color: "white",
    alignSelf: "center",
    fontFamily: "MontSerrat",
  },
});
