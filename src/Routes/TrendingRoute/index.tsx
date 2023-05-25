import React, { useContext } from "react";
import NavBar from "../../Components/NavBar";

import SideBar from "../../Components/SideBar";
import TrendingContent from "../../Components/TrendingContent";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  TrendingPage,
  TrendingPageContent,
  TrendingPageRightSection,
} from "./styleComponets";
import { NxtwatchContextType } from "../../ComponentsTypes";

export type TrendingRouteStyle = {
  darkMode: boolean;
};

const TrendingRoute = () => {
  const { isDarkMode } = useContext<NxtwatchContextType>(NxtwatchContext);
  return (
    <TrendingPage darkMode={isDarkMode}>
      <NavBar />
      <TrendingPageContent>
        <SideBar />
        <TrendingPageRightSection darkMode={isDarkMode}>
          <TrendingContent />
        </TrendingPageRightSection>
      </TrendingPageContent>
    </TrendingPage>
  );
};

export default TrendingRoute;
