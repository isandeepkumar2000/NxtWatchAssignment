import React, { useContext, useEffect, useState } from "react";
import ApiStatusConstant from "../../ConstantsApiStatus/ApiConstantStatus";
import Cookies from "js-cookie";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { ThreeDots } from "react-loader-spinner";

import { VideoDetailLoaderContainer } from "./styleComponets";

import { jwtToken } from "../../Constants/appConstants";
import VideoDetailsItems from "../VideoDetailsItems";
import FailureView from "../Failure";
import { NxtwatchContextType } from "../../ComponentsTypes";

export type VideoDetailType = {
  title: string;
  id: string;
  thumbnailUrl: string;
  videoUrl: string;
  viewCount: string;
  publishedAt: string;
  description: string;
  channel: {
    name: string;
    profile_image_url: string;
    subscriber_count: string;
  };
};

interface VideoIdType {
  id: string;
}

export type ChannelType = {
  name: string;
  profileImageUrl: string;
  subscriberCount: string;
};

export type VideoDetailsStyle = {
  darkMode: boolean;
};
export type VideoDetailsStyleActive = {
  isActive: boolean;
};

const VideoDetails: React.FC<VideoIdType> = (props) => {
  const { isDarkMode } = useContext<NxtwatchContextType>(NxtwatchContext);
  const { id } = props;
  const [videoDetail, setVideoDetails] = useState<VideoDetailType | null>(null);
  const [apiStatus, setApiStatus] = useState(ApiStatusConstant.loading);

  const getGamingApiDetails = async () => {
    try {
      const Tokens = Cookies.get(jwtToken);
      const response = await fetch(`https://apis.ccbp.in/videos/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Tokens}`,
        },
      });
      if (response.ok) {
        const responseData = await response.json();

        const data = responseData.video_details;
        const updatedData = {
          title: data.title,
          id: data.id,
          thumbnailUrl: data.thumbnail_url,
          videoUrl: data.video_url,
          channel: data.channel,
          viewCount: data.view_count,
          publishedAt: data.published_at,
          description: data.description,
        };

        setVideoDetails(updatedData);
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
  }, []);

  const renderVideoDetails = () => {
    return <VideoDetailsItems data={videoDetail as VideoDetailType} />;
  };

  const renderContent = () => {
    switch (apiStatus) {
      case ApiStatusConstant.loading:
        return (
          <VideoDetailLoaderContainer>
            <ThreeDots
              color={isDarkMode ? "white" : "#1e293b"}
              height={80}
              width={80}
            />
          </VideoDetailLoaderContainer>
        );
      case ApiStatusConstant.failed:
        return <FailureView />;
      case ApiStatusConstant.success:
        return renderVideoDetails();
      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
};

export default VideoDetails;
