import { types } from "./actionTypes";
import server from "../../api/server";

export const userDataSuccess = payload => {
  return {
    type: types.GET_USERDATA,
    payload: payload
  };
};

export const getUserData = (token, userId) => async dispatch => {
  await server
    .get(`/userdata/`, {
      headers: { authorization: `Token ${token}` }
    })
    .then(res => {
      res.data.map(user => {
        if (user.user === userId) {
          dispatch(userDataSuccess(user));
        }
      });
    })
    .catch(err => console.log(err));
};
