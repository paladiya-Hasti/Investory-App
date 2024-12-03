
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user")); 

  return (
    <Route
      {...rest}
      element={user ? element : <Redirect to="/signup" />}
    />
  );
};

export default PrivateRoute;
