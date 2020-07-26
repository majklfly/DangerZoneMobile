import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ChangePasswordFormStyles as styles } from "./ChangePasswordFormStyle";
import server from "../../api/server";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ChangePasswordForm = (props) => {
  const [old_password, setOldPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleResponse = (res) => {
    setLoading(false);
    setMessage("Password has been updated");
  };

  const handleError = (e) => {
    setLoading(false);
    setMessage("Current password is inccorect");
  };

  const updatePassword = async () => {
    setLoading(true);
    const token = await AsyncStorage.getItem("token");
    console.log(token);
    server
      .patch(
        "/api/change-password/",
        {
          old_password,
          new_password,
        },
        {
          headers: { authorization: `Token ${token}` },
        }
      )
      .then((res) => handleResponse(res))
      .catch((e) => handleError(e));
  };

  return (
    <View style={styles.mainContainer}>
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
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => updatePassword()}
        >
          <Text style={styles.buttonText}>Update my password</Text>
        </TouchableOpacity>
      )}
      {message && <Text style={styles.errorMessage}>{message}</Text>}
    </View>
  );
};
