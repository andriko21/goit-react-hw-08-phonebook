import * as contactsActions from "./contacts-actions";
import * as api from "../../helpers/contactsApi";

export const fetchContacts = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const contacts = await api.getContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    console.log(error);
    contactsActions.fetchContactsError(error.message);
  }
};

export const fetchAddContacts = (data) => async (dispatch) => {
    dispatch(contactsActions.fetchContactsRequest());

  try {
    api.addContacts(data);
    dispatch(contactsActions.addContact(data));
  } catch (error) {
    contactsActions.fetchContactsError(error.message);
  }
};

export const fetchDeleteContacts = (id) => async (dispatch) => {
    dispatch(contactsActions.fetchContactsRequest());
  try {
    api.removeContacts(id);
    dispatch(contactsActions.removeContact(id));
  } catch (error) {
    contactsActions.fetchContactsError(error.message);
  }
};
