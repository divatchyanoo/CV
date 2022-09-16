import React from "react";
import {  AiFillLinkedin } from "react-icons/ai";
import {SiGitlab} from "react-icons/si";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper style={{display:'flex', justifyContent:'space-between', alignItems: 'center'}}>
     
        <LinkColumn style={{maxWidth: "50vw"}}>
          <LinkTitle>Contactez-moi</LinkTitle>
          <LinkItem href="mailto:davidgrondin2a@gmail.com">
            davidgrondin2a@gmail.com
          </LinkItem>
        </LinkColumn>
      <SocialIconsContainer>
        <CompanyContainer></CompanyContainer>
        <SocialIcons href="https://gitlab.com/divatchyano">
          <SiGitlab size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/david-grondin-aa4755207/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
