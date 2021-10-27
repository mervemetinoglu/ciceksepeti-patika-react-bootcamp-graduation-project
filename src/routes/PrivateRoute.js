import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getToken } from "../helpers/auth";

function PrivateRoute({ children, ...rest }) {
  const accessToken = getToken();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        accessToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
