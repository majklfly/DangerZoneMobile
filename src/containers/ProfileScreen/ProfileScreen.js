import React, { useEffect } from "react";
import { View, BackHandler } from "react-native";
import Profile from "../../components/Profile/Profile";
import UserBoardContainer from "../UserBoardContainer/UserBoardContainer";
import { navigate } from "../../navigationRef";

import { connect } from "react-redux";

const ProfileScreen = (props) => {
  useEffect(() => {
    const backButtonHandler = () => {
      navigate("Chapters");
      return true;
    };
    BackHandler.addEventListener("hardwareBackPress", backButtonHandler);

    return () => {
      BackHandler.removeEventListener();
    };
  }, []);

  return (
    <View>
      <Profile userdata={props.userdata} />
      <UserBoardContainer />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    userdata: state.userDataReducer.userdata,
  };
};

export default connect(mapStateToProps)(ProfileScreen);
