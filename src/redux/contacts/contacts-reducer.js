import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {addContact, removeContact, changeFilter,fetchContactsRequest,fetchContactsSuccess,fetchContactsError} from "./contacts-actions"

// const initialState = [
//   { id: uuidv4(), name: "Rosie Simpson", number: "459-12-56" },
//   { id: uuidv4(), name: "Hermione Kline", number: "443-89-12" },
//   { id: uuidv4(), name: "Eden Clements", number: "645-17-79" },
//   { id: uuidv4(), name: "Annie Copeland", number: "227-91-26" },
// ];

const initialState = [];

const items = createReducer(initialState, {
  [fetchContactsSuccess]: (_,action) => action.payload,
  [addContact]: (state, { payload }) => [payload, ...state],

  [removeContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filtered = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

});

const error = createReducer(null, {
  [fetchContactsRequest]: () => null,
  [fetchContactsError]: (_, action) => action.payload,

});


export default combineReducers({
  items,
  filtered,
  isLoading,
  error
});
