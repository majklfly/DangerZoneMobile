import React from "react";
import { StyleSheet } from "react-native";

export const SigninScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  formContainer: {
    justifyContent: "center",
    top: 100,
    marginHorizontal: 10,
    paddingHorizontal: 13,
  },
  textLabel: {
    color: "white",
  },
  signinButton: {
    marginHorizontal: 40,
    backgroundColor: "#FF7110",
    borderRadius: 10,
    width: 250,
    marginVertical: 40,
    alignSelf: "center",
    elevation: 15,
  },
  errorMessage: {
    color: "white",
    alignSelf: "center",
    fontFamily: "MontSerrat",
  },
  icon: {
    color: "white",
    opacity: 0.6,
  },
  iconText: {
    color: "white",
    fontSize: 15,
    opacity: 0.6,
    paddingHorizontal: 10,
    fontFamily: "MontSerrat",
  },
  iconContainer1: {
    position: "absolute",
    right: 30,
    top: 100,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  iconContainer2: {
    position: "absolute",
    left: 30,
    top: 100,
    flexDirection: "row",
    alignItems: "center",
  },
});
