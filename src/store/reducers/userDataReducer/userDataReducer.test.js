import { types } from "../../actions/actionTypes";
import { updatedObject } from "../../utils";
import userDataReducer from "./userDataReducer";

describe("Chapters Reducer", () => {
  it("GET_USERDATA, should return a new state if receiving type", () => {
    const payload = {};
    const newStatePayload = {
      userdata: {}
    };
    const newState = userDataReducer(undefined, {
      type: types.GET_USERDATA,
      payload
    });
    expect(newState).toEqual(newStatePayload);
  });
});
