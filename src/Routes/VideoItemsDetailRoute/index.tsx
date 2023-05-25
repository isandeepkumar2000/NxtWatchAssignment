import React, { useContext } from "react";
import HeaderNxtwatch from "../../Components/NavBar";
import SideBar from "../../Components/SideBar";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  VideoPage,
  VideoPageContent,
  VideoPageRightSection,
} from "./styleComponents";
import { useParams } from "react-router-dom";
import VideoDetails from "../../Components/VideoDetails.tsx";
import { NxtwatchContextType } from "../../ComponentsTypes";

export type VideoItemsDetailsStyle = {
  darkMode: boolean;
};

const VideoDetailsRoute = () => {
  const { id } = useParams<{ id: string }>();
  const { isDarkMode } = useContext<NxtwatchContextType>(NxtwatchContext);
  return (
    <>
      <VideoPage darkMode={isDarkMode}>
        <HeaderNxtwatch />
        <VideoPageContent>
          <SideBar />
          <VideoPageRightSection darkMode={isDarkMode}>
            <VideoDetails id={id} />
          </VideoPageRightSection>
        </VideoPageContent>
      </VideoPage>
    </>
  );
};

export default VideoDetailsRoute;
