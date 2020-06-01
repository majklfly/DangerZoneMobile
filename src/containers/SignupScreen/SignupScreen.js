import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, Input, Button, Image } from "react-native-elements";
import { SignupScreenStyles as styles } from "./SignupScreenStyles";
import DropdownAlert from "react-native-dropdownalert";

import { connect } from "react-redux";
import { Signup } from "../../store/actions/auth";

const SignupScreen = props => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = () => {
    props.Signup(username, email, password1, password2);
    handleError();
  };

  const isObject = a => {
    return !!a && a.constructor === Object;
  };

  const handleError = () => {
    const object = isObject(props.error);

    switch (object) {
      case object === true && "email" in props.error:
        dropdown.alertWithType(
          "error",
          "Email error",
          `${props.error.email[0]}`
        );
        return "Please, add your password";
      case object === true && "password1" in props.error:
        dropdown.alertWithType(
          "error",
          "Password error",
          `${props.error.password1[0]}`
        );
      case object === true && "password2" in props.error:
        dropdown.alertWithType(
          "error",
          "Password error",
          `${props.error.password2[0]}`
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container} data-test="signupContainer">
      <Image
        style={styles.stretch}
        source={require("../../../assets/icon.png")}
        data-test="signupImage"
      />
      <View style={styles.formContainer} data-test="formContainer">
        <Input
          label="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          secureTextEntry
          label="Password"
          value={password1}
          onChangeText={setPassword1}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          secureTextEntry
          label="Confirm Password"
          value={password2}
          onChangeText={setPassword2}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button
          buttonStyle={styles.signupButton}
          onPress={() => handleSubmit()}
          title="Sign Up"
          data-test="signupButton"
        />
        <Text style={styles.link}> Sign In </Text>
      </View>
      <DropdownAlert ref={ref => (dropdown = ref)} />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const mapStateToProps = state => {
  return {
    error: state.AuthReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Signup: (username, email, password1, password2) => {
      dispatch(Signup(username, email, password1, password2));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
