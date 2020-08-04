import { AsyncStorage } from "react-native";
import { types } from "./actionTypes";
import server from "../../api/server";
import { navigate } from "../../navigationRef";

export const authStart = (userData) => {
  return {
    type: types.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: types.AUTH_SUCCESS,
    token: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: types.AUTH_FAIL,
    error: error,
  };
};

export const autoSignin = (token, userId) => {
  return (dispatch) => {
    const userIdInteger = parseInt(userId);
    if (token && userId) {
      dispatch(authStart());
      dispatch(authSuccess(token, userIdInteger));
      navigate("Chapters");
    }
  };
};

export const Signup = (username, email, password1, password2) => {
  return (dispatch) => {
    dispatch(authStart());
    server
      .post("/rest-auth/registration", {
        username,
        email,
        password1,
        password2,
      })
      .then((res) => {
        const token = res.data.key;
        const userId = res.data.user.pk;
        AsyncStorage.setItem("token", token);
        AsyncStorage.setItem("userId", userId);
        dispatch(authSuccess(token, userId));
        navigate("Chapters");
      })
      .catch((error) => {
        dispatch(authFail(error.response.data));
      });
  };
};

export const Signin = (username, password) => {
  return (dispatch) => {
    dispatch(authStart());
    server
      .post("/rest-auth/login/", {
        username,
        password,
      })
      .then((res) => {
        const token = res.data.key;
        const userId = res.data.user.pk;
        const userIdStr = JSON.stringify(userId);
        const data = [
          ["token", token],
          ["userId", userIdStr],
        ];
        AsyncStorage.multiSet(data);
        dispatch(authSuccess(token, userId));
        navigate("Chapters");
      })
      .catch((error) => {
        dispatch(authFail(error.response.data));
      });
  };
};

export const FacebookLogin = (token) => {
  const provider = "facebook";
  const access_token = token;

  return (dispatch) => {
    dispatch(authStart());
    server
      .post("/social/", {
        provider,
        access_token,
      })
      .then((res) => {
        const token = res.data.token;
        const userId = res.data.id;
        dispatch(authSuccess(token, userId));
        const setItems = async () => {
          await AsyncStorage.setItem("token", res.data.token);
          await AsyncStorage.setItem("userId", res.data.id.toString());
        };
        setItems();
        navigate("Chapters");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
};

export const logout = () => {
  console.log("Async cleared");
  return (dispatch) => {
    AsyncStorage.clear().then(() => navigate("Signin"));
  };
};
