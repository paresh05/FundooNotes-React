import { combineReducers } from "redux";
import { noteReducer } from "./noteReducer";

const noteReducers = combineReducers({
  allNotes: noteReducer,
});

export default noteReducers;
