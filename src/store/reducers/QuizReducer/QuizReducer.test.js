import { types } from "../../actions/actionTypes";
import { updatedObject } from "../../utils";
import QuizReducer from "./QuizReducer";

describe("Quiz Reducer", () => {
  it("GET_QUIZDATA, should return a new state if receiving type", () => {
    const payload = {};
    const newStatePayload = {
      quiz: {}
    };
    const newState = QuizReducer(undefined, {
      type: types.GET_QUIZDATA,
      payload
    });
    expect(newState).toEqual(newStatePayload);
  });

  it("SET_QUIZRESULTS, should return a new state if receiving type", () => {
    const payload = {};
    const newStatePayload = {
      correctAnswers: {}
    };
    const newState = QuizReducer(undefined, {
      type: types.SET_QUIZRESULTS,
      payload
    });
    expect(newState).toEqual(newStatePayload);
  });
});
