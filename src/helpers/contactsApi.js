import axios from "axios";
const BASE = "http://localhost:3030/contacts";

export const getContacts = async () => {
  try {
    const getObject = await axios.get(`${BASE}`)
    return getObject.data;
  } catch (error) {
    console.log(error);
  }
};

export const addContacts = async (data) => {
  try {
    const getObject = await axios.post(`${BASE}/`, data)
    return getObject.data;
  } catch (error) {
    console.log(error);
  }
};


export const removeContacts = async (id) => {
  try {
    const getObject = await axios.delete(`${BASE}/${id}`)
    return getObject.data;
  } catch (error) {
    console.log(error);
  }
};
