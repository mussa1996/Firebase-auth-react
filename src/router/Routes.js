import { Route, Switch } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import ForgotPassword from "../components/ForgotPassword"
import UpdateProfile from "../components/UpdateProfile"
import Signup from "../components/Signup"
export default function Routers() {
    return (
        <Switch>
             <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
           
        </Switch>
    );
    }