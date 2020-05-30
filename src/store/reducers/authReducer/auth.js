import { types } from "../../actions/actionTypes";
import { updatedObject } from "../../utils";

const initialState = {
  token: null,
  error: null,
  userId: null,
  loading: false
};

const authStart = (state, action) => {
  return updatedObject(state, {
    error: null,
    loading: true
  });
};

const AuthFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false
  });
};

const AuthSuccess = (state, action) => {
  return updatedObject(state, {
    token: action.token,
    userId: action.userId,
    error: null,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updatedObject(state, {
    token: null
  });
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_START:
      return authStart(state, action);
    case types.AUTH_SUCCESS:
      return AuthSuccess(state, action);
    case types.AUTH_FAIL:
      return AuthFail(state, action);
    case types.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default authReducer;
