import React, { useContext, useState, useEffect } from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { formatDistanceToNow } from "date-fns";
import { GoPrimitiveDot } from "react-icons/go";
import Player from "react-player";
import {
  VideoItemChannel,
  VideoItemContent,
  VideoItemDetail,
  VideoItemLogo,
  VideoItemOtherDetail,
  VideoItemOtherDetailContainer,
  VideoItemTitle,
} from "../HomeVideoItem/styleComponents";

import { VideoDetailType } from "../VideoDetails.tsx";
import {
  VideoItemActionBtn,
  VideoItemActionText,
  VideoItemBottomRight,
  VideoItemBottomSection,
  VideoItemChannelDetail,
  VideoItemHr,
  VideoItemOtherDetailLeft,
  VideoItemOtherDetailRight,
  VideoItemSubscriber,
  VideoItemTopSection,
} from "./styleComponents";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { RiPlayListAddLine } from "react-icons/ri";
import { NxtwatchContextType } from "../../ComponentsTypes";

export type VideoItemStyle = {
  darkMode: boolean;
};
export type VideoItemActive = {
  isActive: boolean;
};

interface VideoItemPp {
  data: VideoDetailType;
}

const VideoDetailsItems: React.FC<VideoItemPp> = (props) => {
  const [linked, setLinked] = useState(false);

  const [disliked, setDisLinked] = useState(false);

  const { data } = props;
  const { isDarkMode, savedVideo, setSavedVideo } = useContext<
    NxtwatchContextType
  >(NxtwatchContext);
  const [isSaved, setIsSaved] = useState(
    savedVideo.some((video) => video.id === data.id)
  );
  const date = formatDistanceToNow(new Date(data.publishedAt), {
    addSuffix: true,
  });

  const isDisliked = () => {
    if (linked) {
      setLinked(false);
    }
    if (disliked) {
      setDisLinked(false);
    } else {
      setDisLinked(true);
    }
  };

  const isLiked = () => {
    if (disliked) {
      setDisLinked(false);
    }
    if (linked) {
      setLinked(false);
    } else {
      setLinked(true);
    }
  };

  useEffect(() => {
    const savedVideoIds = JSON.parse(
      localStorage.getItem("savedVideos") || "[]"
    );
    setIsSaved(savedVideoIds.includes(data.id));
  }, [data.id]);

  const onSaveButtonClicked = () => {
    const savedVideoIds = JSON.parse(
      localStorage.getItem("savedVideos") || "[]"
    );

    if (!isSaved) {
      savedVideoIds.push(data.id);
      localStorage.setItem("savedVideos", JSON.stringify(savedVideoIds));
      setSavedVideo((prevSavedVideo) => [...prevSavedVideo, data]);
      setIsSaved(true);
    } else {
      const updatedSavedVideoIds = savedVideoIds.filter(
        (id: any) => id !== data.id
      );
      localStorage.setItem("savedVideos", JSON.stringify(updatedSavedVideoIds));
      setSavedVideo((prevSavedVideo) =>
        prevSavedVideo.filter((video) => video.id !== data.id)
      );
      setIsSaved(false);
    }
  };

  return (
    <VideoItemContent>
      <Player
        url={data.videoUrl}
        controls
        width="100%"
        className="nxtwatch-video-player"
      />

      <VideoItemDetail>
        <VideoItemTopSection className="Container">
          <VideoItemTitle darkMode={isDarkMode}>{data.title}</VideoItemTitle>
          <VideoItemOtherDetailContainer
            className="ButtonSectionArea"
            darkMode={isDarkMode}
          >
            <VideoItemOtherDetailLeft>
              <VideoItemOtherDetail>{data.viewCount}</VideoItemOtherDetail>
              <GoPrimitiveDot className="nxtwatch-video-item-dot" />
              <VideoItemOtherDetail>{date}</VideoItemOtherDetail>
            </VideoItemOtherDetailLeft>
            <VideoItemOtherDetailRight>
              <VideoItemActionBtn isActive={linked} onClick={isLiked}>
                <AiOutlineLike />
                <VideoItemActionText>Like</VideoItemActionText>
              </VideoItemActionBtn>
              <VideoItemActionBtn isActive={disliked} onClick={isDisliked}>
                <AiOutlineDislike />
                <VideoItemActionText>Dislike</VideoItemActionText>
              </VideoItemActionBtn>
              <VideoItemActionBtn
                isActive={isSaved}
                onClick={onSaveButtonClicked}
              >
                <RiPlayListAddLine />
                <VideoItemActionText>
                  {isSaved ? "Remove" : "Saved"}
                </VideoItemActionText>
              </VideoItemActionBtn>
            </VideoItemOtherDetailRight>
          </VideoItemOtherDetailContainer>
        </VideoItemTopSection>
        <VideoItemHr />
        <VideoItemBottomSection>
          <VideoItemLogo src={data.channel.profile_image_url} alt="" />
          <VideoItemBottomRight>
            <VideoItemChannel darkMode={isDarkMode}>
              {data.channel.name}
            </VideoItemChannel>
            <VideoItemSubscriber darkMode={isDarkMode}>
              {data.channel.subscriber_count} subscribers
            </VideoItemSubscriber>
            <VideoItemChannelDetail darkMode={isDarkMode}>
              {data.description}
            </VideoItemChannelDetail>
          </VideoItemBottomRight>
        </VideoItemBottomSection>
      </VideoItemDetail>
    </VideoItemContent>
  );
};

export default VideoDetailsItems;
