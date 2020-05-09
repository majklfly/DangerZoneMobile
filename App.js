import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import DropdownAlert from "react-native-dropdownalert";
import { AlertHelper } from "./src/containers/AlertHelper";

import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import { setNavigator } from "./src/navigationRef";

import { Provider } from "react-redux";
import { store } from "./src/store/createStore";

import SigninScreen from "./src/containers/SigninScreen/SigninScreen";
import SignupScreen from "./src/containers/SignupScreen/SignupScreen";
import ProfileScreen from "./src/containers/ProfileScreen/ProfileScreen";
import ChaptersScreen from "./src/containers/ChaptersScreen/ChaptersScreen";
import TermsScreen from "./src/containers/TermsScreen/TermsScreen";

const switchNavigator = createSwitchNavigator({
  loginFlow: createMaterialTopTabNavigator(
    {
      Terms: TermsScreen,
      Signin: SigninScreen,
      Signup: SignupScreen
    },
    {
      initialRouteName: "Signin",
      animationEnable: true,
      tabBarOptions: {
        showLabel: false,
        showIcon: false,
        style: { height: 0 }
      }
    }
  ),
  mainFlow: createBottomTabNavigator({
    Chapters: ChaptersScreen,
    Profile: ProfileScreen
  })
});

export const AppContainer = createAppContainer(switchNavigator);

export default App = () => {
  return (
    <>
      <Provider store={store}>
        <AppContainer
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </Provider>
      <DropdownAlert
        defaultContainer={{
          padding: 8,
          flexDirection: "row"
        }}
        ref={ref => AlertHelper.setDropDown(ref)}
        onClose={() => AlertHelper.invokeOnClose()}
      />
    </>
  );
};
