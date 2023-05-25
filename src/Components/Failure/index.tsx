import React, { useContext } from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  VideoDetailFailureContainer,
  VideoDetailFailureHeading,
  VideoDetailFailureImage,
  VideoDetailFailureRetryBtn,
  VideoDetailFailureText,
} from "../VideoDetails.tsx/styleComponets";
import { NxtwatchContextType } from "../../ComponentsTypes";

const FailureView: React.FC = () => {
  const { isDarkMode } = useContext<NxtwatchContextType>(NxtwatchContext);
  return (
    <VideoDetailFailureContainer darkMode={isDarkMode}>
      <VideoDetailFailureImage
        src={
          isDarkMode
            ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
            : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        }
        alt="failure"
      />
      <VideoDetailFailureHeading>
        Oops! Something went wrong
      </VideoDetailFailureHeading>
      <VideoDetailFailureText darkMode={isDarkMode}>
        We are having some trouble to complete your request.
      </VideoDetailFailureText>
      <VideoDetailFailureText darkMode={isDarkMode}>
        Please try again.
      </VideoDetailFailureText>
      <VideoDetailFailureRetryBtn>Retry</VideoDetailFailureRetryBtn>
    </VideoDetailFailureContainer>
  );
};

export default FailureView;
