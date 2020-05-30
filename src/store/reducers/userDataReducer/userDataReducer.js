import { updatedObject } from "../../utils";
import { types } from "../../actions/actionTypes";

const userDataReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_USERDATA:
      return updatedObject(state, {
        userdata: action.payload
      });
    default:
      return state;
  }
};

export default userDataReducer;
