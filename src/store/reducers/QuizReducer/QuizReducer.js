import { updatedObject } from "../../utils";
import { types } from "../../actions/actionTypes";

const QuizReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_QUIZDATA:
      return updatedObject(state, {
        quiz: action.payload
      });
    default:
      return state;
  }
};

export default QuizReducer;
