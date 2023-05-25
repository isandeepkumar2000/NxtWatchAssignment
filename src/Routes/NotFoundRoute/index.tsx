import React, { useContext } from "react";
import HeaderNxtwatch from "../../Components/NavBar";
import SideBar from "../../Components/SideBar";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  NotFoundEmptyContainer,
  NotFoundEmptyHeading,
  NotFoundEmptyImage,
  NotFoundEmptyText,
  NotFoundPage,
  NotFoundPageContent,
  NotFoundPageRightSection,
} from "./styleComponets";
import { NxtwatchContextType } from "../../ComponentsTypes";

export type NotFoundRouteStyle = {
  darkMode: boolean;
};

const NotFoundRoute = () => {
  const { isDarkMode } = useContext<NxtwatchContextType>(NxtwatchContext);
  return (
    <NotFoundPage darkMode={isDarkMode}>
      <HeaderNxtwatch />
      <NotFoundPageContent>
        <SideBar />
        <NotFoundPageRightSection>
          <NotFoundEmptyContainer darkMode={isDarkMode}>
            <NotFoundEmptyImage
              src={
                isDarkMode
                  ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                  : "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
              }
              alt="empty"
            />
            <NotFoundEmptyHeading>Page Not found</NotFoundEmptyHeading>
            <NotFoundEmptyText darkMode={isDarkMode}>
              We are sorry, the page you requested could not be found.
            </NotFoundEmptyText>
          </NotFoundEmptyContainer>
        </NotFoundPageRightSection>
      </NotFoundPageContent>
    </NotFoundPage>
  );
};

export default NotFoundRoute;
