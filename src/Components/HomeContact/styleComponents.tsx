import styled from "styled-components";
import { HomeContentStyleComponentsType } from "../../ComponentsTypes";


export const HomeVideoListContainer = styled.div`
  margin: 0px 30px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 30px 20px;
  @media (max-width: 998px) {
    margin: 0px 30px;
    grid-template-columns: auto auto;
  }
  @media (max-width: 568px) {
    margin: 0px;
    grid-template-columns: auto;
  }
`;
export const HomeLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;
export const HomeFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  color: ${(props: HomeContentStyleComponentsType) =>
    props.darkMode ? "white" : "#231f20"};
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;
export const HomeFailureImage = styled.img`
  width: 100%;
  max-width: 350px;
`;
export const HomeFailureHeading = styled.h2``;
export const HomeFailureText = styled.p`
  margin-top: 0px;
  font-size: 18px;
  margin-bottom: 5px;
  color: ${(props: HomeContentStyleComponentsType) =>
    props.darkMode ? "#94a3b8" : "#1e293b"};
`;
export const HomeFailureRetryBtn = styled.button`
  border-radius: 3px;
  background-color: #6366f1;
  color: white;
  font-weight: bold;
  border: 0px;
  padding: 12px 30px;
  margin-top: 20px;
`;
export const HomeEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  color: ${(props: HomeContentStyleComponentsType) =>
    props.darkMode ? "white" : "#231f20"};
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;
export const HomeEmptyImage = styled.img`
  width: 100%;
  max-width: 350px;
`;
export const HomeEmptyHeading = styled.h2`
  margin-top: 20px;
`;
export const HomeEmptyText = styled.p`
  margin-top: 0px;
  font-size: 18px;
  margin-bottom: 5px;
  color: ${(props: HomeContentStyleComponentsType) =>
    props.darkMode ? "#94a3b8" : "#1e293b"};
`;

export const NoSearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  width: 100%;
`;
export const NoResultsMsg = styled.h1`
  color: ${(props: HomeContentStyleComponentsType) =>
    !props.darkMode ? "#0f0f0f" : "#f9f9f9"};
`;

export const Suggestion = styled.p`
  color: ${(props: HomeContentStyleComponentsType) =>
    !props.darkMode ? "#0f0f0f" : "#f9f9f9"};
`;
export const RetryButtonInFailure = styled.button`
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  height: 40px;
  width: 10%;
`;
export const FailureImage = styled.img`
  margin-top: 50px;
  width: 25%;
`