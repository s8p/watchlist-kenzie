import Home from "Pages/Home";
import Login from "Pages/Login";
import Register from "Pages/Register";
import { Switch } from "react-router-dom";
import Route from "./route";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default Routes;
