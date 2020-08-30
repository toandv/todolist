import React, { lazy, Suspense } from "react";

import {
  Route,
} from "react-router-dom";

export default function RouteWithSubRoutes(route) {
  console.log(route.component);
  const Component = React.lazy(() => import(`${route.component}`));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <Component {...props} routes={route.routes}/>
        )}
      />
    </Suspense>

  );
}