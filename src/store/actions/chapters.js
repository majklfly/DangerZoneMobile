import { types } from "./actionTypes";
import server from "../../api/server";
import { navigate } from "../../navigationRef";

export const getChapter_function = data => {
  return {
    type: types.GET_CHAPTER,
    payload: data
  };
};

export const getChapters = token => async dispatch => {
  await server
    .get("/chapters/", {
      headers: { authorization: `Token ${token}` }
    })
    .then(res => {
      dispatch({
        type: types.GET_CHAPTERS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getChapter = (token, index) => async dispatch => {
  await server
    .get(`/chapters/${index}/`, {
      headers: { authorization: `Token ${token}` }
    })
    .then(response => {
      dispatch(getChapter_function(response.data));
    })
    .catch(err => {
      console.log(err);
    });
};
