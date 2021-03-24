import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

function ProtectedRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}

export default ProtectedRoute;
