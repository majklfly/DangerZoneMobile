import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ChangePasswordFormStyles = StyleSheet.create({
  mainContainer: {
    marginTop: "30%",
    margin: "5%",
    borderRadius: 10,
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
  button: {
    width: width * 0.5,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    elevation: 15,
    backgroundColor: "#364d79",
  },
  buttonText: {
    color: "white",
    fontFamily: "MontSerrat",
  },
  errorMessage: {
    fontFamily: "MontSerrat",
    alignSelf: "center",
    marginTop: "8%",
    fontSize: 20,
  },
});
