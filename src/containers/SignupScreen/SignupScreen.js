import React, { useState } from "react";
import { View } from "react-native";
import { Text, Input, Button, Image } from "react-native-elements";
import { SignupScreenStyles as styles } from "./SignupScreenStyles";

import { connect } from "react-redux";
import { Signup } from "../../store/actions/auth";

const SignupScreen = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isfocusedUsername, setIsFocusedUsername] = useState(false);
  const [isfocusedEmail, setIsFocusedEmail] = useState(false);
  const [isfocusedPassword1, setIsFocusedPassword1] = useState(false);
  const [isfocusedPassword2, setIsFocusedPassword2] = useState(false);

  const handleSubmit = () => {
    props.Signup(username, email, password1, password2);
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
          value={username}
          placeholder="Username"
          placeholderTextColor={isfocusedUsername ? "transparent" : "lightgrey"}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
          onFocus={() => setIsFocusedUsername(true)}
          onBlur={() => setIsFocusedUsername(false)}
          clearTextOnFocus={true}
          inputStyle={{
            color: "white",
            textAlign: "center",
            fontFamily: "MontSerrat",
          }}
          inputContainerStyle={{
            borderColor: "white",
          }}
          containerStyle={{ marginVertical: 20, paddingHorizontal: 30 }}
          autoCorrect={false}
        />
        <Text style={styles.errorMessage}>
          {props.error && props.error.username}
        </Text>
        <Input
          value={email}
          placeholder="Email"
          placeholderTextColor={isfocusedEmail ? "transparent" : "lightgrey"}
          onChangeText={setEmail}
          autoCapitalize="none"
          onFocus={() => setIsFocusedEmail(true)}
          onBlur={() => setIsFocusedEmail(false)}
          clearTextOnFocus={true}
          inputStyle={{
            color: "white",
            textAlign: "center",
            fontFamily: "MontSerrat",
          }}
          inputContainerStyle={{
            borderColor: "white",
          }}
          containerStyle={{
            marginVertical: 20,
            marginTop: -20,
            paddingHorizontal: 30,
          }}
          autoCorrect={false}
        />
        <Text style={styles.errorMessage}>
          {props.error && props.error.email}
        </Text>
        <Input
          secureTextEntry
          placeholder="Password"
          placeholderTextColor={
            isfocusedPassword1 ? "transparent" : "lightgrey"
          }
          onFocus={() => setIsFocusedPassword1(true)}
          onBlur={() => setIsFocusedPassword1(false)}
          value={password1}
          onChangeText={setPassword1}
          autoCapitalize="none"
          clearTextOnFocus={true}
          inputStyle={{
            color: "white",
            textAlign: "center",
            fontFamily: "MontSerrat",
          }}
          inputContainerStyle={{
            borderColor: "white",
          }}
          containerStyle={{
            marginVertical: 20,
            marginTop: -20,
            paddingHorizontal: 30,
          }}
          autoCorrect={false}
        />
        <Text style={styles.errorMessage}>
          {props.error && props.error.password1
            ? props.error.password1[0]
            : null}
        </Text>
        <Input
          secureTextEntry
          placeholder="Confirm Password"
          placeholderTextColor={
            isfocusedPassword2 ? "transparent" : "lightgrey"
          }
          onFocus={() => setIsFocusedPassword2(true)}
          onBlur={() => setIsFocusedPassword2(false)}
          value={password2}
          onChangeText={setPassword2}
          autoCapitalize="none"
          clearTextOnFocus={true}
          inputStyle={{
            color: "white",
            textAlign: "center",
            fontFamily: "MontSerrat",
          }}
          inputContainerStyle={{
            borderColor: "white",
          }}
          containerStyle={{
            marginVertical: 20,
            marginTop: -20,
            paddingHorizontal: 30,
          }}
          autoCorrect={false}
        />
        <Text style={styles.errorMessage}>
          {props.error && props.error.password2
            ? props.error.password2[0]
            : password1 !== password2 && "please confirm the password"}
        </Text>
        <Button
          buttonStyle={styles.signupButton}
          onPress={() => handleSubmit()}
          title="Sign Up"
          titleStyle={{ fontFamily: "MontSerrat" }}
          data-test="signupButton"
        />
      </View>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const mapStateToProps = (state) => {
  return {
    error: state.AuthReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Signup: (username, email, password1, password2) => {
      dispatch(Signup(username, email, password1, password2));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
