import React, { Fragment } from "react";
import cx from "classnames";

import ResizeDetector from "react-resize-detector";

import Main from "./Layout/Main";

function App() {
  return (
    <ResizeDetector
      handleWidth
      render={({ width }) => (
        <Fragment>
          <div
            className={cx(
              { "small-screen": width < 1033 },
              { "medium-screen": width > 1032 && width < 1401 },
              { "large-screen": width > 1400 },
              "container"
            )}
          >
            <Main />
          </div>
        </Fragment>
      )}
    />
  );
}

export default App;
