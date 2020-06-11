import React, { useState, useRef } from "react";
import { UserBoardContainerStyles as styles } from "./UserBoardContainerStyles";
import { Animated, PanResponder, View, Dimensions } from "react-native";
import UserBoard from "../UserBoard/UserBoard";

const { width, height } = Dimensions.get("window");

const springPoint1 = { x: 1, y: 0 };
const springPoint2 = { x: 1, y: height - 20 };

const UserBoardContainer = () => {
  const fullScreen = useRef(new Animated.Value(0)).current;
  const pan = useRef(new Animated.ValueXY({ x: 0, y: height - 20 })).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({ x: pan.x._value, y: pan.y._value });
      },
      onPanResponderMove: Animated.event([null, { dy: pan.y }]),
      onPanResponderRelease: () => {
        fullScreen === 0 ? fullScreen.setValue(1) : fullScreen.setValue(0);
        pan.flattenOffset();
        Animated.spring(
          pan,
          {
            toValue: pan.y._value >= height - 110 ? springPoint2 : springPoint1
          },
          { useNativeDriver: true }
        ).start();
      }
    })
  ).current;
  return (
    <View style={styles.container}>
      <Animated.View
        style={{ transform: [{ translateY: pan.y }] }}
        {...panResponder.panHandlers}
      >
        <UserBoard />
      </Animated.View>
    </View>
  );
};

export default UserBoardContainer;
