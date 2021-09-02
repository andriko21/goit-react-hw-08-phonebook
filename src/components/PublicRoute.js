import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
    const getIsloagged = useSelector((state) => state.auth.isLoaggedIn);
    const shouldBeRedirected = getIsloagged && restricted;
    
  return (
      <Route  {...routeProps}>{ shouldBeRedirected ? <Redirect to="/"/> : children}</Route>
  )
};

export default PublicRoute;
