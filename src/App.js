import React, { useEffect } from "react";
import ContactsViev from "./vievs/contactsViev";
import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import LoginViev from "./vievs/loginViev";
import RegisterViev from "./vievs/registerViev";
import HomeViev from "./vievs/homeViev";
import { fetchCurrUser } from "./redux/auth/auth-operations";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchCurrUser());
  }, [dispatch]);
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
