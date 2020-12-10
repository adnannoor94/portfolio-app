import { Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";

const Portfolio = lazy(() => import("../Views/Portfolio"));

export default () => {
  return (
    <Fragment>
      {/* Portfolio */}
      <Suspense
        fallback={() => (
          <div className="loading-center">
            <img
              className="logo-over-loading"
              src="/assets/logo.png"
              alt="logo"
            />
            <h1>Loading...</h1>
          </div>
        )}
      >
        <Route path="/" component={Portfolio} />
      </Suspense>

      <Route exact patch="/" render={() => <Redirect to="/main" />} />
    </Fragment>
  );
};
