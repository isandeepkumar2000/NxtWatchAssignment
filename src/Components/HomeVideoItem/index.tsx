import React, { useContext } from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { GoPrimitiveDot } from "react-icons/go";
import { formatDistanceToNow } from "date-fns";

import {
  VideoItem,
  VideoItemChannel,
  VideoItemContent,
  VideoItemDetail,
  VideoItemImage,
  VideoItemLogo,
  VideoItemOtherDetail,
  VideoItemOtherDetailContainerships,
  VideoItemTitle,
} from "./styleComponents";
import { ContainerLink } from "../SavedVideoItem/styleComponets";
import { HomeVideoPrp, NxtwatchContextType } from "../../ComponentsTypes";

const HomeVideoItem: React.FC<HomeVideoPrp> = (props) => {
  const { isDarkMode } = useContext<NxtwatchContextType>(NxtwatchContext);
  const { data } = props;
  const date = formatDistanceToNow(new Date(data.publishedAt), {
    addSuffix: true,
  });
  return (
    <ContainerLink
      to={"/Nxtwatch/video/" + data.id}
      className="nxtwatch-video-item"
    >
      <VideoItem>
        <VideoItemImage src={data.thumbnailUrl} alt="" />
        <VideoItemContent>
          <VideoItemLogo src={data.channel.profile_image_url} alt="" />
          <VideoItemDetail>
            <VideoItemTitle darkMode={isDarkMode}>{data.title}</VideoItemTitle>
            <VideoItemChannel darkMode={isDarkMode}>
              {data.channel.name}
            </VideoItemChannel>
            <VideoItemOtherDetailContainerships darkMode={isDarkMode}>
              <VideoItemOtherDetail>{data.viewCount}</VideoItemOtherDetail>
              <GoPrimitiveDot className="nxtwatch-video-item-dot" />
              <VideoItemOtherDetail>{date}</VideoItemOtherDetail>
            </VideoItemOtherDetailContainerships>
          </VideoItemDetail>
        </VideoItemContent>
      </VideoItem>
    </ContainerLink>
  );
};

export default HomeVideoItem;
