import { Switch } from "react-router-dom";

import Home from "Pages/Home";
import Login from "Pages/Login";
import Mylist from "Pages/MyList";
import Register from "Pages/Register";
import Route from "./route";
import Dashboard from "Pages/Dashboard";
import Aboutus from "Pages/AboutUs";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/mylist" component={Mylist} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/aboutus" component={Aboutus} isPrivate />
    </Switch>
  );
};

export default Routes;
