import { types } from "../../actions/actionTypes";
import AuthReducer from "./auth";

const initialState = {
  token: null,
  error: null,
  loading: false
};

describe("AuthReducer", () => {
  it("should return default state", () => {
    const newState = AuthReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it("AUTH_START, should return a new state if receiving type", () => {
    const payload = { error: null, loading: true, token: null };
    const newState = AuthReducer(initialState, {
      type: types.AUTH_START,
      payload
    });
    expect(newState).toEqual(payload);
  });

  it("AUTH_SUCCESS, should return a new state if receiving type", () => {
    const payload = { error: undefined, loading: false, token: null };
    const newState = AuthReducer(initialState, {
      type: types.AUTH_FAIL,
      payload
    });
    expect(newState).toEqual(payload);
  });
  it("AUTH_FAIL, should return a new state if receiving type", () => {
    const payload = { error: undefined, loading: false, token: null };
    const newState = AuthReducer(initialState, {
      type: types.AUTH_FAIL,
      payload
    });
    expect(newState).toEqual(payload);
  });
  it("AUTH_LOGOUT, should return a new state if receiving type", () => {
    const payload = { error: null, loading: false, token: null };
    const newState = AuthReducer(initialState, {
      type: types.AUTH_LOGOUT,
      payload: payload
    });
    expect(newState).toEqual(payload);
  });
});
