import React, { lazy, Suspense, useEffect } from "react";
import { Switch } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import { fetchCurrUser } from "./redux/auth/auth-operations";
import { useDispatch, useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
const LoginViev = lazy(() => import("./vievs/loginViev"));
const RegisterViev = lazy(() => import("./vievs/registerViev"));
const HomeViev = lazy(() => import("./vievs/homeViev"));
const ContactsViev = lazy(() => import("./vievs/contactsViev"));

const App = () => {
  const isLoading = useSelector((state) => state.auth.loader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrUser());
  }, [dispatch]);
  return isLoading === true ? (<h3>Почекай зараз все буде...</h3>):(
      <>
        <AppBar />
        <Switch>
          <Suspense fallback={<p>Загружаємо...</p>}>
            <PublicRoute exact path="/">
              <HomeViev />
            </PublicRoute>

            <PublicRoute exact path="/login" restricted>
              <LoginViev />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterViev />
            </PublicRoute>

            <PrivateRoute exact path="/contacts">
              <ContactsViev />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </>
    )
  
};
export default App;
