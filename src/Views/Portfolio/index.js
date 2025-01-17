import React, { useState, Fragment } from "react";
import { Route } from "react-router-dom";
import cx from "classnames";

import { RightMenuContextProvider } from "../../Context/RightMenu";

import LeftInfoPanel from "./LeftInfoPanel";
import RightMenuPanel from "./RightMenuPanel";
import Main from "./Main";
import History from "./History";
import Contact from "./Contact";

function Portfolio() {
  const [isMenuOpen, setMenuStatus] = useState(false);
  const [isInfoPanelOpen, setInfoPanelStatus] = useState(false);

  const infoPanelClasses = cx(
    "left-info-panel",
    isInfoPanelOpen ? "active" : null
  );

  const mainPanelClasses = cx(
    "main-content",
    isMenuOpen || isInfoPanelOpen ? "in-active" : null
  );

  function curtainClicked() {
    if (isMenuOpen) setMenuStatus(false);
    else if (isInfoPanelOpen) setInfoPanelStatus(false);
  }

  return (
    <RightMenuContextProvider
      value={{
        isMenuOpen: isMenuOpen,
        setMenuStatus: setMenuStatus,
        isInfoPanelOpen: isInfoPanelOpen,
        setInfoPanelStatus: setInfoPanelStatus,
      }}
    >
      <Fragment>
        <div className="mobile-top-bar"></div>
        <div className="main-app-wrapper">
          <div className="main-app-container">
            <div className={infoPanelClasses}>
              <LeftInfoPanel />
            </div>
            <div className={mainPanelClasses}>
              <div className="curtain" onClick={curtainClicked}></div>
              <div className="main-top-bg">
                <div className="main-top-bg-overlay"></div>
              </div>
              <div className="transition-fade">
                <Route path={`/main`} component={Main} />
                <Route path={`/history`} component={History} />
                <Route path={`/contact`} component={Contact} />
                <div className="footer-container">
                  <footer>
                    <div>© 2021 All Rights Reserved.</div>
                    <div>
                      <a
                        href="mailto:adnannoor@outlook.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        adnannoor@outlook.com
                      </a>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
            <RightMenuPanel />
          </div>
        </div>
      </Fragment>
    </RightMenuContextProvider>
  );
}

export default Portfolio;
