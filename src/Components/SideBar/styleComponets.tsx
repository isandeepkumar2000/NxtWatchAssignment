import styled from "styled-components";
import { SideBarType } from "../../ComponentsTypes";


export const SideBarPage = styled.div`
  background-color: ${(props: SideBarType) =>
    props.darkMode ? "#212121" : "white"};
  min-height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 290px;
  padding: 30px 0px;
  @media (max-width: 768px) {
    display: none;
  }
`;
