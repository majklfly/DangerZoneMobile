import { combineReducers } from "redux";

import AuthReducer from "./authReducer/auth";
import ChapterReducer from "./ChaptersReducer/Chapters";
import userDataReducer from "./userDataReducer/userDataReducer";

const rootReducer = combineReducers({
  AuthReducer,
  ChapterReducer,
  userDataReducer
});

export default rootReducer;
