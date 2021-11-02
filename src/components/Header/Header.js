import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillAmazonCircle, AiFillCodepenCircle } from 'react-icons/ai';
import logo from '../../../public/images/logo.png';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <>
      <Link href="/">
        <img src={logo} alt="logo" style={{ maxWidth: '135px', maxHeight: '100px' }}/>
      </Link>
      </>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <a href="/jerkowski_cv.pdf" download>
          <NavLink>CV</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/ghostcode24" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://codepen.io/ghostcode24" target="_blank">
        <AiFillCodepenCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/jerkowski" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://amzn.to/2Q0I7BB" target="_blank">
        <AiFillAmazonCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
