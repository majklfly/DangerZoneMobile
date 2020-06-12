import React, { useState } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AppLoading } from "expo";

import DropdownAlert from "react-native-dropdownalert";
import { AlertHelper } from "./src/containers/AlertHelper";

import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import { setNavigator } from "./src/navigationRef";
import * as Font from "expo-font";

import { Provider } from "react-redux";
import { store } from "./src/store/createStore";

import SigninScreen from "./src/containers/SigninScreen/SigninScreen";
import SignupScreen from "./src/containers/SignupScreen/SignupScreen";
import ProfileScreen from "./src/containers/ProfileScreen/ProfileScreen";
import ChaptersScreen from "./src/containers/ChaptersScreen/ChaptersScreen";
import ArticleScreen from "./src/containers/ArticleScreen/ArticleScreen";
import TermsScreen from "./src/containers/TermsScreen/TermsScreen";
import QuizScreen from "./src/containers/QuizScreen/QuizScreen";

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
  Chapters: ChaptersScreen,
  Profile: ProfileScreen,
  Article: ArticleScreen,
  Quiz: QuizScreen
});

export const AppContainer = createAppContainer(switchNavigator);

const getFonts = () =>
  Font.loadAsync({
    PermanentMarker: require("./assets/fonts/PermanentMarker-Regular.ttf"),
    PTSans: require("./assets/fonts/PTSans-Regular.ttf")
  });

export default App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
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
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
};
