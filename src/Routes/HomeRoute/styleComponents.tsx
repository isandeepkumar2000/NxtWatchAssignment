import styled from "styled-components";
import { HomeStyle } from ".";

export const HomePage = styled.div`
  background-color: ${(props: HomeStyle) =>
    props.darkMode ? "black" : "#f9f9f9"};
  min-height: 100%;
`;
export const HomePageContent = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  align-items: flex-start;
`;
export const HomePageRightSections = styled.div`
  width: 100%;
  height: 92vh;
  overflow-y: auto;
`;
