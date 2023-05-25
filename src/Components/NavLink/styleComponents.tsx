import styled from "styled-components";
import { NavLinkType } from ".";

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NavLinkText = styled.span`
  color: ${(props: NavLinkType) => (props.darkMode ? "white" : "#181818")};
  margin-left: 20px;
`;
