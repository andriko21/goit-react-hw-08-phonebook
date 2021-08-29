import React from "react";
import ContactsViev from "./vievs/contactsViev";
import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import LoginViev from "./vievs/loginViev";
import RegisterViev from "./vievs/registerViev";
import HomeViev from "./vievs/homeViev";

const App = () => {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact component={HomeViev} />
        <Route path="/contacts" component={ContactsViev} />
        <Route path="/login" component={LoginViev} />
        <Route path="/register" component={RegisterViev} />
      </Switch>
    </>
  );
};
export default App;
