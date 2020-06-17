import { types } from "../../actions/actionTypes";
import { updatedObject } from "../../utils";
import ChapterReducer from "./Chapters";

describe("Chapters Reducer", () => {
  it("GET_CHAPTER, should return a new state if receiving type", () => {
    const payload = {};
    const newStatePayload = {
      chapter: {}
    };
    const newState = ChapterReducer(undefined, {
      type: types.GET_CHAPTER,
      payload
    });
    expect(newState).toEqual(newStatePayload);
  });

  it("GET_CHAPTERS, should return a new state if receiving type", () => {
    const payload = {};
    const newStatePayload = {
      chapters: {}
    };
    const newState = ChapterReducer(undefined, {
      type: types.GET_CHAPTERS,
      payload
    });
    expect(newState).toEqual(newStatePayload);
  });
});
