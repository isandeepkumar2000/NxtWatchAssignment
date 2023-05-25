import React from "react";
import { NxtwatchContextType } from "../ComponentsTypes/index.jsx";

const NxtwatchContext = React.createContext<NxtwatchContextType>({
  isDarkMode: true,
  toggleDarkMode: () => {},
  showBanner: true,
  closeBanner: () => {},
  savedVideo: [],
  setSavedVideo: () => {},
});

export default NxtwatchContext;
