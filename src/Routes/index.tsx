import { Switch } from "react-router-dom";

import Home from "Pages/Home";
import Login from "Pages/Login";
import Mylist from "Pages/MyList";
import Register from "Pages/Register";
import Route from "./route";
import Dashboard from "Pages/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/mylist" component={Mylist} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
