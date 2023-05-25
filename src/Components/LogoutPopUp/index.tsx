import React, { useContext } from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  ContFormContainer,
  LogoutActionContainer,
  LogoutPopupCancelBtn,
  LogoutPopupConfirmBtn,
  LogoutPopupHeader,
} from "./styleComponents";
import { LogoutButtonType, NxtwatchContextType } from "../../ComponentsTypes";

const LogOutPopup = (props: LogoutButtonType) => {
  const { isDarkMode } = useContext<NxtwatchContextType>(NxtwatchContext);
  const { onClose, onConfirm } = props;
  return (
    <ContFormContainer darkMode={isDarkMode}>
      <LogoutPopupHeader darkMode={isDarkMode}>
        Are you sure you want to logout?
      </LogoutPopupHeader>
      <LogoutActionContainer>
        <LogoutPopupCancelBtn onClick={onClose} darkMode={isDarkMode}>
          Cancel
        </LogoutPopupCancelBtn>
        <LogoutPopupConfirmBtn onClick={onConfirm}>
          Confirm
        </LogoutPopupConfirmBtn>
      </LogoutActionContainer>
    </ContFormContainer>
  );
};

export default LogOutPopup;
