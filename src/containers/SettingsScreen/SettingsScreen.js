import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { SettingsScreenStyles as styles } from "./SettingsScreenStyles";
import Modal from "react-native-modal";

import { ChangePasswordForm } from "../../components/ChangePasswordForm/ChangePasswordForm";
import UserBoardContainer from "../UserBoardContainer/UserBoardContainer";

const SettingsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  console.log(Modal);

  return (
    <View style={styles.mainContainer}>
      <ChangePasswordForm
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <UserBoardContainer data-test="swipeContainer" />
    </View>
  );
};

export default SettingsScreen;
