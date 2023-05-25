import React, { useState } from "react";
import { VideoDetailType } from "../ComponentsTypes";
import NxtwatchContext from "./NxtWatchContexts";

const NxtwatchProvider: React.FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showBanner, setShowBanner] = useState(true);
  const [savedVideo, setSavedVideo] = useState<VideoDetailType[]>([]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const closeBanner = () => {
    setShowBanner(false);
  };

  return (
    <NxtwatchContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        showBanner,
        closeBanner,
        savedVideo,
        setSavedVideo,
      }}
    >
      {children}
    </NxtwatchContext.Provider>
  );
};

export default NxtwatchProvider;
