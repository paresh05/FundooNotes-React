import { ActionTypes } from "../constants/actionTypes";
export const fetchAllNotes = (notes) => {
  return {
    type: ActionTypes.FETCH_NOTES,
    payload: notes,
  };
};

export const fetchFilteredNotes = (notes) => {
  return {
    type: ActionTypes.FETCH_SEARCH_NOTES,
    payload: notes,
  };
};
