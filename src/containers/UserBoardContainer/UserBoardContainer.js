import React, { useState } from "react";
import { UserBoardContainerStyles as styles } from "./UserBoardContainerStyles";
import { View, Dimensions } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { onGestureEvent, clamp, withOffset } from "react-native-redash";
import { withSpring } from "../../AnimationHelpers";
import Animated from "react-native-reanimated";
import UserBoard from "../UserBoard/UserBoard";
import { useMemoOne } from "use-memo-one";

const { Value, useCode } = Animated;

const { width, height } = Dimensions.get("window");

const snapY = [0, height - 20];
const offsets = new Value(snapY);

const UserBoardContainer = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const state = new Value(State.UNDETERMINED);
  const translationY = new Value(0);
  const velocityY = new Value(0);
  const gestureHandler = onGestureEvent({
    translationY,
    state
  });

  const onSnap = offset => {
    console.log("offset", offset[0]);
    // setFullScreen(!fullScreen);
  };

  const translateY = clamp(
    withSpring({
      value: translationY,
      velocity: velocityY,
      state: state,
      snapPoints: snapY,
      onSnap: onSnap
    }),
    0,
    height
  );

  return (
    <PanGestureHandler {...gestureHandler}>
      <Animated.View
        style={[styles.container, { transform: [{ translateY }] }]}
      >
        <UserBoard value={fullScreen} />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default UserBoardContainer;
