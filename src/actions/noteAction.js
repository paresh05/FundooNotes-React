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

export const postNewNote = (notes) => {
  return {
    type: ActionTypes.POST_NEW_NOTE,
    payload: notes,
  };
};

export const deleteNote = () => {
  return {
    type: ActionTypes.DELETE_NOTE,
    //payload: notes,
  };
};
