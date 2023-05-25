import React, { useContext } from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  ContactDetailContainer,
  ContactDetailItem,
  ContactDetailItemContainer,
} from "./styleComponents";
import { NxtwatchContextType } from "../../ComponentsTypes";

export type ContactUsType = {
  darkMode: boolean;
};

const ContactUs: React.FC = () => {
  const { isDarkMode } = useContext<NxtwatchContextType>(NxtwatchContext);
  return (
    <ContactDetailContainer darkMode={isDarkMode}>
      <h3>CONTACT US</h3>
      <ContactDetailItemContainer>
        <ContactDetailItem
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt=""
        />
        <ContactDetailItem
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt=""
        />
        <ContactDetailItem
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt=""
        />
      </ContactDetailItemContainer>
      <h3>Enjoy! Now to see your channels and recommendations!</h3>
    </ContactDetailContainer>
  );
};

export default ContactUs;
