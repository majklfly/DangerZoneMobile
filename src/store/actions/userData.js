import { types } from "./actionTypes";
import server from "../../api/server";
import { AsyncStorage } from "react-native";

export const userDataSuccess = (payload) => {
  return {
    type: types.GET_USERDATA,
    payload: payload,
  };
};

export const getUserData = (token, userId) => (dispatch) => {
  server
    .get(`/userdata/`, {
      headers: { authorization: `Token ${token}` },
    })
    .then((res) => {
      res.data.map((user) => {
        if (user.user === userId) {
          dispatch(userDataSuccess(user));
        }
      });
    })
    .catch((err) => console.log(err.response.data));
};

export const updateUserData = (token, userdataId, data) => async (dispatch) => {
  const options = {
    headers: { authorization: `Token ${token}` },
  };
  await server
    .patch(`/userdata/${userdataId}/`, data, options)
    .then((res) => {
      console.log("wiiiiiii");
    })
    .catch((err) => console.log(err));
};
