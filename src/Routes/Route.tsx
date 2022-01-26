import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { ComponentType } from "react";

interface Props extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

function Routes() {
  return <></>;
}

export default Routes;
