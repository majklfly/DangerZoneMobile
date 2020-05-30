import { updatedObject } from "../../utils";
import { types } from "../../actions/actionTypes";

const ChapterReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_CHAPTERS:
      return updatedObject(state, {
        chapters: action.payload
      });
    case types.GET_CHAPTER:
      return updatedObject(state, {
        chapter: action.payload
      });
    default:
      return state;
  }
};

export default ChapterReducer;
