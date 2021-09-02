import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";


const PrivateRoute = ({ children, ...routeProps }) => {
    const getIsloagged = useSelector(state => state.auth.isLoaggedIn)
    return (
        <Route  {...routeProps}>{ getIsloagged ? children : <Redirect to="/login"/>}</Route>
    )
}

export default PrivateRoute;