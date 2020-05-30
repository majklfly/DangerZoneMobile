import React from "react";
import { View, Text, StyleSheet } from "react-native";

const QuizScreen = () => {
  return (
    <View>
      <Text style={styles.title}>QuizScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48
  }
});

export default QuizScreen;
