import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { Text, Input, Button, Image } from "react-native-elements";
import DropdownAlert from "react-native-dropdownalert";

import { SigninScreenStyles as styles } from "./SigninScreenStyles";
import FacebookButton from "../../components/FacebookButton/FacebookButton";

import { AsyncStorage } from "react-native";

import { connect } from "react-redux";
import { Signin, autoSignin } from "../../store/actions/auth";

const SigninScreen = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    props.Signin(username, password);
    handleError();
  };

  const selfLogin = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);
    const loginData = [];
    result.map(item => {
      if (item[0] === "token") {
        loginData.push(item[1]);
      } else if (item[0] === "userId") {
        loginData.push(item[1]);
      }
    });
    props.autoSignin(loginData[0], loginData[1]);
  };

  const handleError = () => {
    console.log("error", props.error);
    if (props.error !== null) {
      if ("password" in props.error) {
        dropdown.alertWithType(
          "error",
          "Password error",
          "Please, add your password"
        );
      } else if ("non_field_errors" in props.error) {
        dropdown.alertWithType(
          "error",
          "Wrong Credentials",
          `${props.error.non_field_errors[0]}`
        );
      }
    } else {
      console.log(props.error);
    }
  };

  useEffect(() => {
    selfLogin();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require("../../../assets/icon.png")}
        data-test="logo"
      />

      {props.loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
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
          <FacebookButton />
        </View>
      )}
      <DropdownAlert ref={ref => (dropdown = ref)} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    error: state.AuthReducer.error,
    loading: state.AuthReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Signin: (username, password) => {
      dispatch(Signin(username, password));
    },
    autoSignin: (token, userId) => {
      dispatch(autoSignin(token, userId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen);
