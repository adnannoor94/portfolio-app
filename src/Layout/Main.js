import { Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";

const Portfolio = lazy(() => import("../Views/Portfolio"));

export default () => {
  return (
    <Fragment>
      {/* Portfolio */}
      <Suspense fallback={<h1>Loading</h1>}>
        <Route path="/portfolio" component={Portfolio} />
      </Suspense>

      <Route exact patch="/" render={() => <Redirect to="/portfolio/main" />} />
    </Fragment>
  );
};
