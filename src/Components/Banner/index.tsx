import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  BannerBtn,
  BannerContainer,
  BannerImage,
  BannerImageContainer,
  BannerText,
} from "./styleComponets";
import { NxtwatchContextType } from "../../ComponentsTypes";

const Banner = () => {
  

  const { showBanner, closeBanner } = useContext<NxtwatchContextType>(
    NxtwatchContext
  );

  const handleBannerClose = () => {
    closeBanner();
  };

  return (
    <>
      {showBanner && (
        <BannerContainer>
          <BannerImageContainer>
            <BannerImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="logo"
            />
            <IoMdClose onClick={handleBannerClose} />
          </BannerImageContainer>
          <BannerText>Buy Nxt Watch Premium prepaid plan with UPI</BannerText>
          <BannerBtn>GET IT NOW</BannerBtn>
        </BannerContainer>
      )}
    </>
  );
};

export default Banner;
