import { createStore } from "redux";
import noteReducers from "./reducers/index";

const store = createStore(
  noteReducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
