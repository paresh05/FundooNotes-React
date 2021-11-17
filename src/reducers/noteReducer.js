import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  notes: [],
  filteredNotes: [],
};
export const noteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_NOTES:
      return { ...state, notes: payload };
    case ActionTypes.FETCH_SEARCH_NOTES:
      return { ...state, filteredNotes: payload };
    default:
      return state;
  }
};
