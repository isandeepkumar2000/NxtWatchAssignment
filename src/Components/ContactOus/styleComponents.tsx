import styled from "styled-components";
import { ContactUsType } from ".";

export const ContactDetailContainer = styled.div`
  padding: 0px 30px;
  color: ${(props: ContactUsType) => (props.darkMode ? "white" : "#212121")};
`;
export const ContactDetailItemContainer = styled.div`
  display: flex;
`;
export const ContactDetailItem = styled.img`
  margin-right: 15px;
  width: 35px;
`;
