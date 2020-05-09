import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { createStore, compose, applyMiddleware } from "redux";

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
