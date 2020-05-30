import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { SwipeUpDownStyles as styles } from "./SwipeUpDownStyles";

const ItemMini = () => {
  return (
    <View style={styles.mini}>
      <Icon name="angle-double-up" size={24} color="white" />
    </View>
  );
};

export default ItemMini;
