import { createStore, combineReducers } from "redux";
import { authReducer as user } from "./reducers/auth.reducer";

export const store = createStore(
  combineReducers({
    user
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
