import React, { useState, useContext } from "react";
import cx from "classnames";

import Hamburger from "hamburger-react";

import RightMenuContext from "../../Context/RightMenu";

const allPages = [
  { label: "Home", to: "#/portfolio/main" },
  { label: "Portfolio", to: "#/portfolio/dummy" },
  { label: "History", to: "#/portfolio/history" },
  { label: "Contact", to: "#/portfolio/dummy" },
];

function RightMenuPanel() {
  const [currentPageName, setCurrentPage] = useState("Home");
  const { isMenuOpen, setMenuStatus } = useContext(RightMenuContext);
  const mainPanelClasses = cx("right-menu-panel", isMenuOpen ? "active" : null);

  const changePage = (pageName) => {
    setCurrentPage(pageName);
    setMenuStatus(false);
  };

  return (
    <div className={mainPanelClasses}>
      <div className="menu-bar-frame">
        <div className="menu-bar-header">
          <div className="menu-bar-btn">
            <Hamburger toggled={isMenuOpen} toggle={setMenuStatus} />
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
                    <a href={page.to} onClick={() => changePage(page.label)}>
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
