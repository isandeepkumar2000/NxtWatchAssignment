import Cookies from "js-cookie";
import React, { useState, useEffect, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { MdLocalFireDepartment } from "react-icons/md";
import ApiStatusConstant from "../../ConstantsApiStatus/ApiConstantStatus";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";

import {
  TrendingLoaderContainer,
  TrendingVideoHeaderContainer,
  TrendingVideoHeaderIconContainer,
  TrendingVideoListContainer,
  TrendingVideoSuccessView,
} from "./styleComponets";
import { jwtToken } from "../../Constants/appConstants";
import TrendingContentItem from "../TrendingContentItem";
import FailureView from "../Failure";
import { NxtwatchContextType, TendingContentType } from "../../ComponentsTypes";

const TrendingContent = () => {
  const { isDarkMode } = useContext<NxtwatchContextType>(NxtwatchContext);
  const [trending, setTrending] = useState<TendingContentType[]>([]);
  const [apiStatus, setApiStatus] = useState(ApiStatusConstant.loading);

  const getTrendingVideosList = async () => {
    try {
      const Token = Cookies.get(jwtToken);
      const response = await fetch(`https://apis.ccbp.in/videos/trending`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      if (response.ok) {
        const responseData = await response.json();
        const updatedData = responseData.videos.map(
          (video: TendingContentType) => ({
            title: video.title,
            id: video.id,
            thumbnailUrl: video.thumbnail_url,
            channel: video.channel,
            viewCount: video.view_count,
            publishedAt: video.published_at,
          })
        );
        setTrending(updatedData);
        setApiStatus(ApiStatusConstant.success);
      } else {
        console.log("not response");
        setApiStatus(ApiStatusConstant.failed);
      }
    } catch (err) {
      console.log(err);
      setApiStatus(ApiStatusConstant.failed);
    }
  };

  useEffect(() => {
    getTrendingVideosList();
  }, []);

  const renderTrendingVideosList = () => {
    return (
      <>
        <TrendingVideoSuccessView>
          <TrendingVideoHeaderContainer darkMode={isDarkMode}>
            <TrendingVideoHeaderIconContainer darkMode={isDarkMode}>
              <MdLocalFireDepartment className="nxtwatch-savedVideo-icons" />
            </TrendingVideoHeaderIconContainer>
            <h1>Trending</h1>
          </TrendingVideoHeaderContainer>
          <TrendingVideoListContainer>
            {trending.map((item) => {
              return <TrendingContentItem key={item.id} trending={item} />;
            })}
          </TrendingVideoListContainer>
        </TrendingVideoSuccessView>
      </>
    );
  };

  const renderContent = () => {
    switch (apiStatus) {
      case ApiStatusConstant.loading:
        return (
          <TrendingLoaderContainer>
            <ThreeDots
              color={isDarkMode ? "white" : "#1e293b"}
              height={80}
              width={80}
            />
          </TrendingLoaderContainer>
        );
      case ApiStatusConstant.failed:
        return (
          <>
            <FailureView />
          </>
        );
      case ApiStatusConstant.success:
        return renderTrendingVideosList();
      default:
        return null;
    }
  };

  return <>{renderContent()}</>;
};

export default TrendingContent;
