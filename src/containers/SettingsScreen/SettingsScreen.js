import React, { useState } from "react";
import { View, TouchableOpacity, Text, Modal } from "react-native";
import { SettingsScreenStyles as styles } from "./SettingsScreenStyles";

import { ChangePasswordForm } from "../../components/ChangePasswordForm/ChangePasswordForm";
import UserBoardContainer from "../UserBoardContainer/UserBoardContainer";

const SettingsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.changePassword}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonTitle}>Update my password</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        data-test="modalEditForm"
      >
        <ChangePasswordForm
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Modal>
      <UserBoardContainer data-test="swipeContainer" />
    </View>
  );
};

export default SettingsScreen;
