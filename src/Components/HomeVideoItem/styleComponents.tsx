import styled from "styled-components";
import { HomeVideoItemStyleComp } from "../../ComponentsTypes";


export const VideoItem = styled.div`
  max-width: 450px;
  @media (max-width: 578px) {
    margin: auto;
  }
`;

export const VideoItemContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 10px;
`;
export const VideoItemDetail = styled.div`
  margin-left: 10px;
  width: 100%;
`;
export const VideoItemImage = styled.img`
  width: 100%;
`;
export const VideoItemLogo = styled.img`
  width: 40px;
`;
export const VideoItemTitle = styled.p`
  margin-top: 0px;
  line-height: 25px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 600;
  font-family: initial, sans-serif;
  color: ${(props: HomeVideoItemStyleComp) =>
    props.darkMode ? "white" : "#231f20"};
`;
export const VideoItemChannel = styled.p`
  color: ${(props: HomeVideoItemStyleComp) =>
    props.darkMode ? "white" : "#64748b"};
  margin: 10px 0px;
`;
export const VideoItemOtherDetailContainerships = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  font-family: initial, sans-serif;
  color: ${(props: HomeVideoItemStyleComp) =>
    props.darkMode ? "white" : "#64748b"};
`;

export const VideoItemOtherDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: initial, sans-serif;
  color: ${(props: HomeVideoItemStyleComp) =>
    props.darkMode ? "white" : "#64748b"};
`;

export const VideoItemOtherDetail = styled.p`
  margin: 0px 5px;
`;
