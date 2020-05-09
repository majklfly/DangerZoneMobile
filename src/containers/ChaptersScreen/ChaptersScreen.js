import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { connect } from "react-redux";

const ChaptersScreen = props => {
  return (
    <View>
      <Text style={styles.title} data-test="chapterTitle">
        ChaptersScreen
      </Text>
      <Text>{props.token}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48
  }
});

const mapStateToProps = state => {
  return {
    token: state.AuthReducer.token
  };
};

export default connect(mapStateToProps)(ChaptersScreen);
