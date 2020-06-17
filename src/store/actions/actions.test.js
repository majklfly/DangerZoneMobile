import * as actions from "./auth";
import * as types from "./actionTypes";

describe("actions", () => {
  it("should create an action to authSuccess", () => {
    const token = "12345";
    const userId = 1;
    const expectedAction = {
      type: types.types["AUTH_SUCCESS"],
      token,
      userId
    };
    expect(actions.authSuccess(token, userId)).toEqual(expectedAction);
  });

  it("should create an action to authStart", () => {
    const expectedAction = {
      type: types.types["AUTH_START"]
    };
    expect(actions.authStart()).toEqual(expectedAction);
  });

  it("should create an action for authFail", () => {
    const error = "testError";
    const expectedAction = {
      type: types.types["AUTH_FAIL"],
      error
    };
    expect(actions.authFail(error)).toEqual(expectedAction);
  });
});
