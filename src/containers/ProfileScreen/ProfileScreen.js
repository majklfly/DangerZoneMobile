import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Profile from "../../components/Profile/Profile";
import UserBoardContainer from "../UserBoardContainer/UserBoardContainer";

import { getUserData } from "../../store/actions/userData";
import { connect } from "react-redux";

const ProfileScreen = props => {
  return (
    <View>
      <Profile userdata={props.userdata} />
      <UserBoardContainer />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    userdata: state.userDataReducer.userdata
  };
};

export default connect(mapStateToProps)(ProfileScreen);
