import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, Input, Button, Image } from "react-native-elements";
import DropdownAlert from "react-native-dropdownalert";

import { SigninScreenStyles as styles } from "./SigninScreenStyles";
import FacebookButton from "../../components/FacebookButton/FacebookButton";

import { connect } from "react-redux";
import { Signin } from "../../store/actions/auth";

const SigninScreen = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    props.Signin(username, password);
    handleError();
  };

  const isObject = a => {
    return !!a && a.constructor === Object;
  };

  const handleError = () => {
    const object = isObject(props.error);

    switch (object) {
      case object === true && "password" in props.error:
        dropdown.alertWithType(
          "error",
          "Password error",
          "Please, add your password"
        );
        return "Please, add your password";
      case object === true && "non_field_errors" in props.error:
        dropdown.alertWithType(
          "error",
          "Wrong Credentials",
          `${props.error.non_field_errors[0]}`
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require("../../../assets/icon.png")}
        data-test="logo"
      />
      <View style={styles.formContainer}>
        <Input
          label="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button
          buttonStyle={styles.signinButton}
          onPress={() => handleSubmit()}
          title="Sign Up"
        />
      </View>
      <FacebookButton />
      <DropdownAlert ref={ref => (dropdown = ref)} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    error: state.AuthReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Signin: (username, password) => {
      dispatch(Signin(username, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen);
