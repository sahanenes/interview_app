// import { useAuth0 } from "@auth0/auth0-react";
// import React from "react";

// const PrivateRouter = () => {
//   const { user } = useAuth0();
//   return user ? <Outlet /> : <Navigate to="/" />;
// };

// export default PrivateRouter;

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRouter = ({ component: Component, ...rest }) => {
  const { user } = useAuth0();

  if (!user) {
    alert("please login to see details");
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRouter;
