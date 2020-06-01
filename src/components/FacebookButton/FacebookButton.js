import React from "react";
import { Button } from "react-native-elements";
import * as Facebook from "expo-facebook";
import Icon from "react-native-vector-icons/FontAwesome";

import { FacebookLogin } from "../../store/actions/auth";
import { connect } from "react-redux";

import { FacebookButtonStyles as styles } from "./FacebookButtonStyles";

const FacebookButton = props => {
  async function logIn() {
    try {
      await Facebook.initializeAsync("723054295168510");
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"]
      });
      if (type === "success") {
        props.FacebookLogin(token);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  return (
    <Button
      data-test="facebookButton"
      buttonStyle={styles.button}
      title="  Facebook Login"
      icon={<Icon name="facebook-square" size={25} color="white" />}
      containerStyle={styles.iconContainer}
      onPress={() => logIn()}
    ></Button>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    FacebookLogin: token => {
      dispatch(FacebookLogin(token));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FacebookButton);
