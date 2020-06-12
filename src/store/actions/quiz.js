import { types } from "./actionTypes";
import server from "../../api/server";

export const quizSuccess = payload => {
  return {
    type: types.GET_QUIZDATA,
    payload: payload
  };
};

export const quizResults = payload => {
  return {
    type: types.SET_QUIZRESULTS,
    payload: payload
  };
};

export const getQuizData = (token, chapterId) => async dispatch => {
  await server
    .get(`/quiz/`, {
      headers: { authorization: `Token ${token}` }
    })
    .then(res => {
      res.data.map(quiz => {
        if (quiz.chapter === chapterId) {
          dispatch(quizSuccess(quiz));
        }
      });
    })
    .catch(err => {
      console.log(err.response.data);
    });
};

export const setQuizResults = (
  token,
  completed,
  correct_answers,
  user,
  userData,
  chapter
) => async dispatch => {
  await server
    .post(
      "/chapterdata/",
      { completed, correct_answers, user, userData, chapter },
      { headers: { authorization: `Token ${token}` } }
    )
    .then(res => {
      dispatch(quizResults(correct_answers));
    });
};
