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
    <Div2>
      <Div1>
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
      </Div1>
      <Div1>
        <li>
          <Link href="/veille">
            <NavLink>Veille</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/certifications">
            <NavLink>Certifications</NavLink>
          </Link>
        </li>
      </Div1>
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
