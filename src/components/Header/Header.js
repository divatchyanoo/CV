import Link from "next/link";
import React from "react";
import {
  AiFillLinkedin,
} from "react-icons/ai";
import { DiMaterializecss } from "react-icons/di";
import {SiGitlab} from "react-icons/si";

import {
  Container,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div2>
      <li>
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
      </li>
      <li>
        <Link href="/">
          <NavLink>Présentation</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/projets">
          <NavLink>Projets</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/veille">
          <NavLink>Veille Technologique</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/certifications">
          <NavLink>Certifications</NavLink>
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
