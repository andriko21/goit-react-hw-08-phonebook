import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const getContacts = async () => {
  try {
    const {data} = await axios.get('/contacts')
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addContacts = async (userDocs) => {
  try {
    const {data} = await axios.post(`/contacts`, userDocs)
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const removeContacts = async (id) => {
  try {
    const {data} = await axios.delete(`/contacts/${id}`)
    return data;
  } catch (error) {
    console.log(error);
  }
};