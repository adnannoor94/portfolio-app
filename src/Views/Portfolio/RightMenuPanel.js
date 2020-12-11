import React, { useState, useContext, useEffect } from "react";
import cx from "classnames";

import Hamburger from "hamburger-react";

import RightMenuContext from "../../Context/RightMenu";

const allPages = [
  { label: "Home", to: "#/main" },
  { label: "History", to: "#/history" },
  { label: "Contact", to: "#/contact" },
];

function RightMenuPanel() {
  const [currentPageName, setCurrentPage] = useState("Home");
  const { isMenuOpen, setMenuStatus } = useContext(RightMenuContext);
  const mainPanelClasses = cx("right-menu-panel", isMenuOpen ? "active" : null);

  useEffect(() => {
    const currentHash = window.location.hash;
    const currentPageInfo = allPages.find((page) => page.to === currentHash);
    if (currentPageInfo) setCurrentPage(currentPageInfo.label);
  }, []);

  return (
    <div className={mainPanelClasses}>
      <div className="menu-bar-frame">
        <div className="menu-bar-header">
          <div className="menu-bar-btn">
            <Hamburger toggled={isMenuOpen} toggle={setMenuStatus} size={20} />
          </div>
        </div>
        <div className="menu-current-page">{currentPageName}</div>
        <div className="menu-scroll-frame">
          <nav>
            <ul className="right-panel-main-menu">
              {allPages.map((page, index) => {
                return (
                  <li
                    key={`page-url-${index}`}
                    className={`menu-item ${
                      currentPageName === page.label ? "active-url" : null
                    }`}
                  >
                    <a href={page.to} onClick={() => setMenuStatus(false)}>
                      {page.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default RightMenuPanel;
