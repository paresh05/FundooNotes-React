import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  notes: [],
  filteredNotes: [],
  trash: [],
  view: false,
};
export const noteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_NOTES:
      return { ...state, notes: payload };
    case ActionTypes.FETCH_SEARCH_NOTES:
      return { ...state, filteredNotes: payload };
    case ActionTypes.POST_NEW_NOTE:
      return { ...state, notes: [...state.notes, payload] };
    case ActionTypes.UPDATE_NOTE:
      let newNote = [...state.notes];
      newNote[payload.index] = payload.data;
      return { ...state, notes: newNote };
    case ActionTypes.ADD_TO_TRASH:
      return { ...state, trash: payload };
    case ActionTypes.DELETE_NOTE:
      let newNotes = [...state.notes];
      newNotes = newNotes.filter((notes) => notes._id != payload.data._id);
      let trashNote = [...state.trash];
      trashNote.push(payload.data);
      return { ...state, notes: newNotes, trash: trashNote };
    case ActionTypes.DELETE_FROM_TRASH:
      let trashNotes = [...state.trash];
      trashNotes = trashNotes.filter((notes) => notes._id != payload.data._id);
      let notes = [...state.notes];
      notes.push(payload.data);
      return { ...state, notes: notes, trash: trashNotes };

    case ActionTypes.DELETE:
      let deleteNote = [...state.trash];
      deleteNote = deleteNote.filter((notes) => notes._id != payload.data._id);
      return { ...state, trash: deleteNote };

    case ActionTypes.VIEW:
      return { ...state, view: payload };
    default:
      return state;
  }
};
