import React, { useState, useEffect } from "react";
import { View, Linking } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import LottieView from "lottie-react-native";

import { SigninScreenStyles as styles } from "./SigninScreenStyles";
import FacebookButton from "../../components/FacebookButton/FacebookButton";
import Background from "../../components/Background/Background";

import { AsyncStorage } from "react-native";

import { connect } from "react-redux";
import { Signin, autoSignin } from "../../store/actions/auth";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const SigninScreen = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isfocusedUsername, setIsFocusedUsername] = useState(false);
  const [isfocusedPassword, setIsFocusedPassword] = useState(false);

  const handleSubmit = () => {
    props.Signin(username, password);
  };

  const selfLogin = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);

    const loginData = [];
    result.map((item) => {
      if (item[0] === "token") {
        loginData.push(item[1]);
      } else if (item[0] === "userId") {
        loginData.push(item[1]);
      }
    });
    props.autoSignin(loginData[0], loginData[1]);
  };

  useEffect(() => {
    selfLogin();
  }, []);

  return (
    <View style={styles.container}>
      {props.loading ? (
        <LottieView
          source={require("../../../assets/animations/7314-loading.json")}
          autoPlay
          loop
        />
      ) : (
        <>
          <View style={styles.iconContainer1}>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              style={styles.icon}
              size={30}
            />
            <Text style={styles.iconText}>Signup</Text>
          </View>
          <View style={styles.iconContainer2}>
            <FontAwesomeIcon
              icon={faAngleDoubleLeft}
              style={styles.icon}
              size={30}
            />
            <Text style={styles.iconText}>Privacy</Text>
          </View>
          <View style={styles.formContainer}>
            <Input
              value={username}
              placeholder="Username"
              placeholderTextColor={
                isfocusedUsername ? "transparent" : "lightgrey"
              }
              onChangeText={setUsername}
              autoCapitalize="none"
              autoCorrect={false}
              onFocus={() => setIsFocusedUsername(true)}
              clearTextOnFocus={true}
              inputStyle={{
                color: "white",
                textAlign: "center",
                fontFamily: "MontSerrat",
              }}
              inputContainerStyle={{
                borderColor: "white",
              }}
              containerStyle={{ marginVertical: 20 }}
            />
            <Input
              secureTextEntry
              placeholder="Password"
              placeholderTextColor="white"
              placeholderTextColor={
                isfocusedPassword ? "transparent" : "lightgrey"
              }
              value={password}
              onChangeText={setPassword}
              onFocus={() => setIsFocusedPassword(true)}
              autoCapitalize="none"
              autoCorrect={false}
              inputStyle={{
                color: "white",
                textAlign: "center",
                fontFamily: "MontSerrat",
              }}
              inputContainerStyle={{ borderColor: "white" }}
            />
            <Text style={styles.errorMessage}>
              {props.error && props.error.password}
            </Text>
            <Text style={styles.errorMessage}>
              {props.error && props.error.non_field_errors}
            </Text>
            <Button
              buttonStyle={styles.signinButton}
              onPress={() => handleSubmit()}
              title="Sign Up"
              titleStyle={{ fontFamily: "MontSerrat" }}
            />
            <FacebookButton />
            <Text
              style={styles.forgotPasswordText}
              onPress={() =>
                Linking.openURL(
                  "https://dangerzone-react.herokuapp.com/sendnespassword/"
                )
              }
            >
              Forgot your password?
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.AuthReducer.error,
    loading: state.AuthReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Signin: (username, password) => {
      dispatch(Signin(username, password));
    },
    autoSignin: (token, userId) => {
      dispatch(autoSignin(token, userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen);
