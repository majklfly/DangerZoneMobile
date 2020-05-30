import { combineReducers } from "redux";

import AuthReducer from "./authReducer/auth";
import ChapterReducer from "./ChaptersReducer/Chapters";
import userDataReducer from "./userDataReducer/userDataReducer";
import QuizReducer from "./QuizReducer/QuizReducer";

const rootReducer = combineReducers({
  AuthReducer,
  ChapterReducer,
  userDataReducer,
  QuizReducer
});

export default rootReducer;
