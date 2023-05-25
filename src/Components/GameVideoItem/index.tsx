import React, { useContext } from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";

import { ContainerLink } from "../SavedVideoItem/styleComponets";
import {
  GameItemContainer,
  GameItemImage,
  GameItemTitle,
  GameItemViewCount,
} from "./styleComponents";
import { GamingContentType, NxtwatchContextType } from "../../ComponentsTypes";

interface GameVideoPr {
  data: GamingContentType;
}

export type GameVideItemStyle = {
  darkMode: boolean;
};

const GameVideoItem: React.FC<GameVideoPr> = (props) => {
  const { data } = props;
  const { isDarkMode } = useContext<NxtwatchContextType>(NxtwatchContext);
  return (
    <ContainerLink
      to={"/Nxtwatch/video/" + data.id}
      className="nxtwatch-gamevideo-item"
    >
      <GameItemContainer>
        <GameItemImage src={data.thumbnailUrl} />
        <GameItemTitle darkMode={isDarkMode}>{data.title}</GameItemTitle>
        <GameItemViewCount darkMode={isDarkMode}>
          {data.viewCount} Watching Worldwide
        </GameItemViewCount>
      </GameItemContainer>
    </ContainerLink>
  );
};

export default GameVideoItem;
