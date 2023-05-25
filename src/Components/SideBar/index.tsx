import React, { useContext } from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import ContactUs from "../ContactOus";
import NavLinkNxtwatch from "../NavLink";
import { SideBarPage } from "./styleComponets";
import { NxtwatchContextType } from "../../ComponentsTypes";

const SideBar = () => {
  const { isDarkMode } = useContext<NxtwatchContextType>(NxtwatchContext);
  return (
    <SideBarPage darkMode={isDarkMode}>
      <NavLinkNxtwatch />
      <ContactUs />
    </SideBarPage>
  );
};

export default SideBar;
