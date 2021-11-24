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

export const updateNote = (notes) => {
  return {
    type: ActionTypes.UPDATE_NOTE,
    payload: notes,
  };
};

export const deleteNote = (notes) => {
  return {
    type: ActionTypes.DELETE_NOTE,
    payload: notes,
  };
};

export const addToTrash = (notes) => {
  return {
    type: ActionTypes.ADD_TO_TRASH,
    payload: notes,
  };
};

export const deleteFromTrash = (notes) => {
  return {
    type: ActionTypes.DELETE_FROM_TRASH,
    payload: notes,
  };
};

export const deleteANote = (notes) => {
  return {
    type: ActionTypes.DELETE,
    payload: notes,
  };
};