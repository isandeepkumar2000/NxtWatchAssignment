import { SavedVideoStyle } from ".";
import styled from "styled-components";

export const VideoItemDetailContainer = styled.div`
  color: ${(props: SavedVideoStyle) => (props.darkMode ? "white" : "#64748b")};
  @media (max-width: 578px) {
    display: flex;
    align-items: center;
  }
`;
export const VideoItemChannel = styled.p`
  margin: 10px 0px;
`;
export const VideoItemOtherDetailContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const VideoItemOtherDetailContainerBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  margin-bottom: 9px;
`;
export const VideoItemOtherDetail = styled.p`
  margin: 0px 0px;
`;
