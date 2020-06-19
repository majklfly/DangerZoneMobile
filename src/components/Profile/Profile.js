import React, { useState } from "react";
import { View, Text, Button, Modal, Linking } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { ProfileStyles as styles } from "./ProfileStyles";
import ProfileForm from "../ProfileForm/ProfileForm";

const Profile = props => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = async username => {
    await Linking.openURL(`https://www.facebook.com/${username}`);
  };

  return (
    <View style={styles.container} data-test="mainContainer">
      <View style={styles.titleContainer} data-test="titleContainer">
        <Text style={styles.title}>{props.userdata.username}</Text>
        <FontAwesome
          name="edit"
          style={styles.icon}
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>
      <View style={styles.textContainer} data-test="textContainer">
        {props.userdata.firstName && (
          <View style={styles.textlineContainer}>
            <Text style={styles.label}>first Name</Text>
            <Text style={styles.textline}>{props.userdata.firstName}</Text>
          </View>
        )}
        {props.userdata.lastName && (
          <View style={styles.textlineContainer}>
            <Text style={styles.label}>last Name</Text>
            <Text style={styles.textline}>{props.userdata.lastName}</Text>
          </View>
        )}
        {props.userdata.email && (
          <View style={styles.textlineContainer}>
            <Text style={styles.label}>email</Text>
            <Text style={styles.textline}>{props.userdata.email}</Text>
          </View>
        )}
        {props.userdata.company && (
          <View style={styles.textlineContainer}>
            <Text style={styles.label}>company</Text>
            <Text style={styles.textline}>{props.userdata.company}</Text>
          </View>
        )}
        {props.userdata.position && (
          <View style={styles.textlineContainer}>
            <Text style={styles.label}>position</Text>
            <Text style={styles.textline}>{props.userdata.position}</Text>
          </View>
        )}
        {props.userdata.country && (
          <View style={styles.textlineContainer}>
            <Text style={styles.label}>country</Text>
            <Text style={styles.textline}>{props.userdata.country}</Text>
          </View>
        )}
        <View style={styles.iconsContainer} data-test="iconsContainer">
          {props.userdata.facebook && (
            <FontAwesome
              name="facebook"
              style={styles.facebookIcon}
              onPress={() =>
                Linking.openURL(
                  `https://www.facebook.com/${props.userdata.facebook}`
                )
              }
            />
          )}
          {props.userdata.twitter && (
            <FontAwesome
              name="twitter"
              style={styles.twitterIcon}
              onPress={() =>
                Linking.openURL(
                  `https://www.twitter.com/${props.userdata.twitter}`
                )
              }
            />
          )}
          {props.userdata.reddit && (
            <FontAwesome
              name="reddit"
              style={styles.redditIcon}
              onPress={() =>
                Linking.openURL(
                  `https://www.reddit.com/user/${props.userdata.reddit}`
                )
              }
            />
          )}
        </View>
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        data-test="modalEditForm"
      >
        <ProfileForm
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      </Modal>
    </View>
  );
};

export default Profile;
