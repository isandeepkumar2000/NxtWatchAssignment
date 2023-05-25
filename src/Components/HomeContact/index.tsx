import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { jwtToken } from "../../Constants/appConstants";
import ApiStatusConstant from "../../ConstantsApiStatus/ApiConstantStatus";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import HomeVideoItem from "../HomeVideoItem";

import {
  HomeEmptyContainer,
  HomeEmptyHeading,
  HomeEmptyImage,
  HomeEmptyText,
  HomeFailureRetryBtn,
  HomeLoaderContainer,
  HomeVideoListContainer,
} from "./styleComponents";
import FailureView from "../Failure";
import {
  GettingPP,
  NxtwatchContextType,
  VideoTypeList,
} from "../../ComponentsTypes";

const HomeContent: React.FC<GettingPP> = (props) => {
  const { isDarkMode } = useContext<NxtwatchContextType>(NxtwatchContext);
  const { searchValue } = props;
  const [videoList, setVideoList] = useState<VideoTypeList[]>([]);
  const [apiStatus, setApiStatus] = useState(ApiStatusConstant.loading);

  const getGamingApiDetails = async () => {
    try {
      const Tokens = Cookies.get(jwtToken);
      const response = await fetch(
        `https://apis.ccbp.in/videos/all?search=${searchValue}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Tokens}`,
          },
        }
      );
      console.log(response);
      if (response.ok) {
        const responseData = await response.json();
        const updatedData = responseData.videos.map((video: VideoTypeList) => ({
          title: video.title,
          id: video.id,
          thumbnailUrl: video.thumbnail_url,
          channel: video.channel,
          viewCount: video.view_count,
          publishedAt: video.published_at,
        }));
        setVideoList(updatedData);
        setApiStatus(ApiStatusConstant.success);
      } else {
        setApiStatus(ApiStatusConstant.failed);
      }
    } catch (err) {
      console.log(err);
      setApiStatus(ApiStatusConstant.failed);
    }
  };

  useEffect(() => {
    getGamingApiDetails();
  }, [searchValue]);

  const renderVideoList = () => {
    console.log(videoList);
    return (
      <HomeVideoListContainer>
        {videoList.map((video) => {
          return <HomeVideoItem key={video.id} data={video} />;
        })}
      </HomeVideoListContainer>
    );
  };
  const renderNoSearchResults = () => {
    return (
      <>
        <FailureView />
      </>
    );
  };

  const renderContent = () => {
    switch (apiStatus) {
      case ApiStatusConstant.loading:
        return (
          <HomeLoaderContainer>
            <ThreeDots
              color={isDarkMode ? "white" : "#1e293b"}
              height={80}
              width={80}
            />
          </HomeLoaderContainer>
        );
      case ApiStatusConstant.failed:
        return <FailureView />;
      case ApiStatusConstant.success:
        return renderVideoList();
      case ApiStatusConstant.empty:
        return (
          <HomeEmptyContainer darkMode={isDarkMode}>
            <HomeEmptyImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no video"
            />
            <HomeEmptyHeading>No Search Result Found</HomeEmptyHeading>
            <HomeEmptyText darkMode={isDarkMode}>
              Try different keyword or remove search filters
            </HomeEmptyText>
            <HomeFailureRetryBtn onClick={getGamingApiDetails}>
              Retry
            </HomeFailureRetryBtn>
          </HomeEmptyContainer>
        );
      default:
        return null;
    }
  };
  return (
    <div>
      {videoList.length === 0 ? renderNoSearchResults() : renderContent()}
    </div>
  );
};

export default HomeContent;
