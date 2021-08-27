import React from "react";

import Form from "./components/Form/Form";
import ContactList from "./components/ContactLIst/ContactList";
import Filter from "./components/Filter/Filter";
const App = () => {

  // useEffect(() => {
  //   if (localStorage.getItem("contacts")) {
  //     setContacts(JSON.parse(localStorage.getItem("contacts")));
  //   }
  // }, []);

  // useEffect(() => {
  //   try {
  //     localStorage.setItem("contacts", JSON.stringify(contacts));
  //   } catch {
  //     throw new Error();
  //   }
  // }, [contacts]);
  return (
    <>
      <Form />
      <Filter />
      <ContactList />
    </>
  );
};
export default App;
