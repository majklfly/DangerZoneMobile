import { types } from "../../actions/actionTypes";
import { updatedObject } from "../../utils";

const initialState = {
  token: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_SUCCESS:
      return AuthSuccess(state, action);
    case types.AUTH_FAIL:
      return AuthFail(state, action);
    default:
      return state;
  }
};

const AuthFail = (state, action) => {
  return updatedObject(state, {
    error: action.error.response.data
  });
};

const AuthSuccess = (state, action) => {
  return updatedObject(state, {
    token: action.token
  });
};

export default authReducer;
