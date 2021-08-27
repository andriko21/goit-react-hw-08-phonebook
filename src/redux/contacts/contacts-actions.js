import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/ADD");
const removeContact = createAction("contacts/REMOVE");
const changeFilter = createAction("contacts/FILTER");

const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
const fetchContactsError = createAction("contacts/fetchContactsError");

export {
  addContact,
  removeContact,
  changeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
};
