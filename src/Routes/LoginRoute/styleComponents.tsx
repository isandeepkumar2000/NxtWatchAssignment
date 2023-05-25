import styled from "styled-components";
import { LoginRouteStyle } from ".";

export const LoginPageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${(props: LoginRouteStyle) =>
    props.darkMode ? "#212121" : "white"};
`;
