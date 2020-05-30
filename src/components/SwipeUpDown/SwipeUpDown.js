import React from "react";
import SwipeUpDown from "react-native-swipe-up-down";

import { SwipeUpDownStyles as styles } from "./SwipeUpDownStyles";

import ItemMini from "./ItemMini";
import UserBoard from "../../containers/UserBoard/UserBoard";

export const SwipeUpDownCustom = () => {
  return (
    <SwipeUpDown
      itemMini={<ItemMini />}
      itemFull={<UserBoard />}
      onShowMini={() => console.log("mini")}
      onShowFull={() => console.log("full")}
      onMoveDown={() => console.log("down")}
      onMoveUp={() => console.log("up")}
      disablePressToShow={false} // Press item mini to show full
      style={styles.container}
      animation="easeInEaseOut"
    />
  );
};
