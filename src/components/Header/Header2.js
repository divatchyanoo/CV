import Link from "next/link";
import React from "react";
import {
  AiFillLinkedin,
} from "react-icons/ai";
import { DiMaterializecss } from "react-icons/di";
import {SiGitlab} from "react-icons/si";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "16px",
          }}
        >
          <DiMaterializecss size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/">
          <NavLink>Présentation</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#about">
          <NavLink>À propos</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://gitlab.com/divatchyano">
        <SiGitlab size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/david-grondin-aa4755207/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
