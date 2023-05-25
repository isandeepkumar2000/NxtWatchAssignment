import React, { useContext } from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";

import { formatDistanceToNow } from "date-fns";

import {
  ContainerLink,
  VideoItem,
  VideoItemChannel,
  VideoItemContent,
  VideoItemDetail,
  VideoItemDetailContainer,
  VideoItemImage,
  VideoItemImageContainer,
  VideoItemLogo,
  VideoItemOtherDetail,
  VideoItemOtherDetailContainer,
  VideoItemTitle,
} from "./styleComponets";
import { GoPrimitiveDot } from "react-icons/go";

import { NxtwatchContextType, SavedVideoPp } from "../../ComponentsTypes";

const SavedVideoItem: React.FC<SavedVideoPp> = (props) => {
  const { isDarkMode } = useContext<NxtwatchContextType>(NxtwatchContext);
  const { data } = props;
  const date = formatDistanceToNow(new Date(data.publishedAt), {
    addSuffix: true,
  });
  return (
    <ContainerLink
      to={"/Nxtwatch/video/" + data.id}
      className="nxtwatch-savedvideo-item"
    >
      <VideoItem>
        <VideoItemImageContainer>
          <VideoItemImage src={data.thumbnailUrl} alt="" />
        </VideoItemImageContainer>
        <VideoItemContent>
          <VideoItemLogo src={data.channel.profile_image_url} alt="" />
          <VideoItemDetail>
            <VideoItemTitle darkMode={isDarkMode}>{data.title}</VideoItemTitle>
            <VideoItemDetailContainer darkMode={isDarkMode}>
              <VideoItemChannel>{data.channel.name}</VideoItemChannel>
              {/* <GoPrimitiveDot className="nxtwatch-video-item-dot nxtwatch-video-item-dot-small" /> */}
              <VideoItemOtherDetailContainer>
                <VideoItemOtherDetail>{data.viewCount}</VideoItemOtherDetail>
                <GoPrimitiveDot className="nxtwatch-video-item-dot" />
                <VideoItemOtherDetail>{date}</VideoItemOtherDetail>
              </VideoItemOtherDetailContainer>
            </VideoItemDetailContainer>
          </VideoItemDetail>
        </VideoItemContent>
      </VideoItem>
    </ContainerLink>
  );
};

export default SavedVideoItem;
