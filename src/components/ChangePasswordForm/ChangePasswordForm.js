import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ChangePasswordFormStyles as styles } from "./ChangePasswordFormStyle";

export const ChangePasswordForm = (props) => {
  const [old_password, setOldPassword] = useState("");
  const [new_password, setNewPassword] = useState("");

  return (
    <View style={styles.mainContainer}>
      <FontAwesome
        name="close"
        style={styles.icon}
        onPress={() => props.setModalVisible(!props.modalVisible)}
      />
      <Text style={styles.label}>Please insert current Password</Text>
      <TextInput
        style={styles.input}
        value={old_password}
        onChangeText={(text) => setOldPassword(text)}
      />
      <Text style={styles.label}>Please insert new Password</Text>
      <TextInput
        style={styles.input}
        value={new_password}
        onChangeText={(text) => setNewPassword(text)}
      />
    </View>
  );
};
