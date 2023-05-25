import React, { useContext } from "react";
import GamingContent from "../../Components/GamingContent";
import HeaderNxtwatch from "../../Components/NavBar";
import SideBar from "../../Components/SideBar";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  GamingPage,
  GamingPageContent,
  GamingPageRightSection,
} from "./styleComponents";
import { NxtwatchContextType } from "../../ComponentsTypes";

export type GamingRoutes = {
  darkMode: boolean;
};

const GamingRoute = () => {
  const { isDarkMode } = useContext<NxtwatchContextType>(NxtwatchContext);
  return (
    <GamingPage darkMode={isDarkMode}>
      <HeaderNxtwatch />
      <GamingPageContent>
        <SideBar />
        <GamingPageRightSection darkMode={isDarkMode}>
          <GamingContent />
        </GamingPageRightSection>
      </GamingPageContent>
    </GamingPage>
  );
};

export default GamingRoute;
