import styled from "styled-components";
import { SearchBarStyle } from "../../ComponentsTypes";


export const SearchLogoContainers = styled.div`
  background-color: ${(props: SearchBarStyle) =>
    props.darkMode ? "#64748b" : "#f9f9f9"};
  border-left: ${(props: SearchBarStyle) =>
    !props.darkMode && "1px solid #64748b"};
  padding: 10px 30px;
  @media (max-width: 568px) {
    padding: 10px 20px;
  }
`;
export const SearchInputField = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0px;
  border-radius: 2px;
  border: 1px solid #64748b;
  background-color: ${(props: SearchBarStyle) =>
    props.darkMode ? "transparent" : "white"};
  margin: 30px;
  max-width: 500px;
  @media (max-width: 568px) {
    margin: 20px;
  }
`;
export const SearchInput = styled.input`
  border: 0px;
  background-color: transparent;
  margin-left: 10px;
  font-size: 16px;
  width: 100%;
  color: ${(props: SearchBarStyle) => (props.darkMode ? "white" : "black")};
  &:focus {
    outline: 0px;
  }
  &::placeholder {
    color: #64748b;
    font-weight: bold;
  }
`;
