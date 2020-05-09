import { AsyncStorage } from "react-native";
import { types } from "./actionTypes";
import server from "../../api/server";
import { navigate } from "../../navigationRef";

export const authStart = userData => {
  return {
    type: types.AUTH_START
  };
};

export const authSuccess = token => {
  return {
    type: types.AUTH_SUCCESS,
    token: token
  };
};

export const authFail = error => {
  return {
    type: types.AUTH_FAIL,
    error: error
  };
};

export const Signup = (username, email, password1, password2) => {
  return dispatch => {
    server
      .post("/rest-auth/registration", {
        username,
        email,
        password1,
        password2
      })
      .then(res => {
        if (res.status === 201) {
          const token = res.data.key;
          console.log("token", token);
          AsyncStorage.setItem("token", token);
          dispatch(authSuccess(token));
          navigate("mainFlow");
        } else {
          console.log("error, mate");
        }
      })
      .catch(error => {
        dispatch(authFail(error));
      });
  };
};

export const Signin = (username, password) => {
  return dispatch => {
    server
      .post("/rest-auth/login/", {
        username,
        password
      })
      .then(res => {
        const token = res.data.key;
        console.log("token", token);
        AsyncStorage.setItem("token", token);
        dispatch(authSuccess(token));
        navigate("mainFlow");
      })
      .catch(error => {
        dispatch(authFail(error));
      });
  };
};

export const FacebookLogin = token => {
  const provider = "facebook";
  const access_token = token;

  return dispatch => {
    console.log("runned");
    console.log("token", token);
    server
      .post("/social/", {
        provider,
        access_token
      })
      .then(res => {
        dispatch(authSuccess(res.data.token));
        navigate("mainFlow");
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };
};
