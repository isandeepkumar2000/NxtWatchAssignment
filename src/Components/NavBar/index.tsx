import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { FiLogOut } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Popup from "reactjs-popup";
import React, { useContext } from "react";
import "./index.css";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  DarkModeImage,
  HamburgerBtn,
  LogoutBtn,
  MobileLogoutBtn,
  Nav,
  NavContent,
  NavLinkContainerBox,
  NavRightSection,
  WebsiteLogo,
} from "./styleComponents";
import LogoutPopup from "../LogoutPopUp";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import NavLinkNxtwatch from "../NavLink";
import { jwtToken } from "../../Constants/appConstants";
import { NxtwatchContextType } from "../../ComponentsTypes";

const NavBar = () => {
  const { isDarkMode, toggleDarkMode } = useContext<NxtwatchContextType>(
    NxtwatchContext
  );
  let history = useHistory();
  const logoutHandler = () => {
    Cookies.remove(jwtToken);
    history.replace("/login");
  };

  return (
    <Nav darkMode={isDarkMode}>
      <NavContent>
        <Link to="/Nxtwatch">
          <WebsiteLogo
            src={
              isDarkMode
                ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            }
            alt="website logo"
          />
        </Link>
        <NavRightSection>
          <div onClick={toggleDarkMode}>
            {isDarkMode ? (
              <DarkModeImage
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="dark"
              />
            ) : (
              <DarkModeImage
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="light"
              />
            )}
          </div>
          <Popup
            modal
            trigger={
              <HamburgerBtn darkMode={isDarkMode}>
                <GiHamburgerMenu className="nxtwatch-hamburger-menu" />
              </HamburgerBtn>
            }
            className={`nxtwatch-ham-popup ${
              isDarkMode ? "dark-nxtwatch-ham-popup" : ""
            }`}
          >
            {(close: Function) => (
              <div>
                <HamburgerBtn darkMode={isDarkMode}>
                  <IoMdClose
                    onClick={() => close()}
                    className="hamburger-close-icon"
                  />
                </HamburgerBtn>
                <NavLinkContainerBox darkMode={isDarkMode}>
                  <NavLinkNxtwatch />
                </NavLinkContainerBox>
              </div>
            )}
          </Popup>
          <Avatar src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
          <Popup
            modal
            trigger={<LogoutBtn darkMode={isDarkMode}>Logout</LogoutBtn>}
            className={`nxtwatch-logout-popup ${
              isDarkMode ? "dark-nxtwatch-logout-popup" : ""
            }`}
          >
            {(close: () => void) => (
              <LogoutPopup onClose={close} onConfirm={logoutHandler} />
            )}
          </Popup>
          <Popup
            modal
            trigger={
              <MobileLogoutBtn darkMode={isDarkMode}>
                <FiLogOut className="mobile-logout-btn" />
              </MobileLogoutBtn>
            }
            className={`nxtwatch-logout-popup ${
              isDarkMode ? "dark-nxtwatch-logout-popup" : ""
            }`}
          >
            {(close: () => void) => (
              <LogoutPopup onClose={close} onConfirm={logoutHandler} />
            )}
          </Popup>
        </NavRightSection>
      </NavContent>
    </Nav>
  );
};

export default withRouter(NavBar);
