import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  BackHandler,
} from "react-native";
import { navigate } from "../../navigationRef";

import { FontAwesome } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { ProfileFormStyles as styles } from "./ProfileFormStyles";
import LottieView from "lottie-react-native";

import { connect } from "react-redux";
import { updateUserData } from "../../store/actions/userData";

const ProfileForm = (props) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [company, setCompany] = useState(null);
  const [position, setPosition] = useState(null);
  const [country, setCountry] = useState(null);
  const [facebook, setFacebook] = useState(null);
  const [twitter, setTwitter] = useState(null);
  const [reddit, setReddit] = useState(null);

  const handleSubmit = () => {
    const data = () => ({
      ...(firstName && { firstName }),
      ...(lastName && { lastName }),
      ...(position && { position }),
      ...(company && { company }),
      ...(country && { country }),
      ...(facebook && { facebook }),
      ...(twitter && { twitter }),
      ...(reddit && { reddit }),
    });
    props.updateUserData(props.token, props.userdata.id, data());
    props.setModalVisible(!props.modalVisible);
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={styles.mainContainer}
      enabled
    >
      <ScrollView style={styles.formContainer} data-test="formContainer">
        <LottieView
          source={require("../../../assets/animations/profile.json")}
          autoPlay
          loop
          speed={0.3}
          style={styles.animation}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Edit</Text>
          <FontAwesome
            name="close"
            style={styles.icon}
            onPress={() => props.setModalVisible(!props.modalVisible)}
          />
        </View>
        <View style={styles.textInputContainer} data-test="titleContainer">
          <Text style={styles.textInputLabel}>First Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setFirstName(text)}
            value={firstName}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.textInputLabel}>Last Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setLastName(text)}
            value={lastName}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.textInputLabel}>Company</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setCompany(text)}
            value={company}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.textInputLabel}>Position</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setPosition(text)}
            value={position}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.textInputLabel}>Country</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setCountry(text)}
            value={country}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.textInputLabel}>Facebook username</Text>
          <TextInput
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(text) => setFacebook(text)}
            value={facebook}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.textInputLabel}>Twitter username</Text>
          <TextInput
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(text) => setTwitter(text)}
            value={twitter}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.textInputLabel}>Reddit username</Text>
          <TextInput
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(text) => setReddit(text)}
            value={reddit}
          />
        </View>
        <Button
          title="update my profile, please"
          titleStyle={{ fontFamily: "MontSerrat" }}
          buttonStyle={styles.submitButton}
          onPress={() => handleSubmit()}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = (state) => {
  return {
    userdata: state.userDataReducer.userdata,
    token: state.AuthReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserData: (token, userDataId, firstName) => {
      dispatch(updateUserData(token, userDataId, firstName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
