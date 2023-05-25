import styled from "styled-components";
import { LogoutStyle } from "../../ComponentsTypes";


export const LogoutActionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const LogoutPopupCancelBtn = styled.button`
  padding: 10px 20px;
  border: 1px solid #475569;
  background-color: transparent;
  border-radius: 3px;
  margin-right: 30px;
  font-weight: bold;
  color: ${(props: LogoutStyle) => (props.darkMode ? "#94a3b8" : "#94a3b8")};
`;
export const LogoutPopupConfirmBtn = styled.button`
  padding: 10px 20px;
  color: white;
  border: 0px;
  border-radius: 3px;
  font-weight: bold;
  background-color: #3b82f6;
`;
export const LogoutPopupHeader = styled.p`
  color: ${(props: LogoutStyle) => (props.darkMode ? "#3b82f6" : "#3b82f6")};
`;

export const ContFormContainer = styled.div`
  background-color: ${(props: LogoutStyle) =>
    props.darkMode ? "white" : "black"};
  padding: 10px 20px;
  border-radius: 10px;
`;
