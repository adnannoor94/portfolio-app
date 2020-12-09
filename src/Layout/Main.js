import { Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";

const Portfolio = lazy(() => import("../Views/Portfolio"));

export default () => {
  return (
    <Fragment>
      {/* Portfolio */}
      <Suspense fallback={<h1 className="loading-center">Loading..</h1>}>
        <Route path="/" component={Portfolio} />
      </Suspense>

      <Route exact patch="/" render={() => <Redirect to="/main" />} />
    </Fragment>
  );
};
