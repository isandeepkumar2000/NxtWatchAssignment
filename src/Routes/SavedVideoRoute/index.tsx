import NavBar from "../../Components/NavBar";
import SideBar from "../../Components/SideBar";
import React, { useContext } from "react";
import { MdLocalFireDepartment } from "react-icons/md";
import "./index.css";
import SavedVideoItem from "../../Components/SavedVideoItem";
import {
  SavedVideoEmptyContainer,
  SavedVideoEmptyHeading,
  SavedVideoEmptyImage,
  SavedVideoEmptyText,
  SavedVideoFilledContainer,
  SavedVideoHeaderContainer,
  SavedVideoHeaderIconContainer,
  SavedVideoListContainer,
  SavedVideoPage,
  SavedVideoPageContent,
  SavedVideoPageRightSection,
} from "./styleComponents";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { NxtwatchContextType } from "../../ComponentsTypes";
export type SavedVideoStyle = {
  darkMode: boolean;
};

const SavedVideoRoute = () => {
  const { isDarkMode, savedVideo } = useContext<NxtwatchContextType>(
    NxtwatchContext
  );
  const empty = savedVideo.length > 0 ? false : true;
  const renderEmptyView = () => {
    return (
      <SavedVideoEmptyContainer darkMode={isDarkMode}>
        <SavedVideoEmptyImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="empty"
        />
        <SavedVideoEmptyHeading darkMode={isDarkMode}>
          No saved videos found
        </SavedVideoEmptyHeading>
        <SavedVideoEmptyText darkMode={isDarkMode}>
          You can save your video while watching them
        </SavedVideoEmptyText>
      </SavedVideoEmptyContainer>
    );
  };
  const renderSavedVideoList = () => {
    return (
      <SavedVideoFilledContainer>
        <SavedVideoHeaderContainer darkMode={isDarkMode}>
          <SavedVideoHeaderIconContainer darkMode={isDarkMode}>
            <MdLocalFireDepartment className="nxtwatch-savedVideo-icons" />
          </SavedVideoHeaderIconContainer>
          <h1>Saved Videos</h1>
        </SavedVideoHeaderContainer>
        <SavedVideoListContainer>
          {savedVideo.map((item) => (
            <SavedVideoItem data={item} />
          ))}
        </SavedVideoListContainer>
      </SavedVideoFilledContainer>
    );
  };

  return (
    <SavedVideoPage darkMode={isDarkMode}>
      <NavBar />
      <SavedVideoPageContent>
        <SideBar />
        <SavedVideoPageRightSection>
          {empty && renderEmptyView()}
          {!empty && renderSavedVideoList()}
        </SavedVideoPageRightSection>
      </SavedVideoPageContent>
    </SavedVideoPage>
  );
};

export default SavedVideoRoute;
