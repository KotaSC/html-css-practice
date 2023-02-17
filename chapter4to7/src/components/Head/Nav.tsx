import styled from "styled-components";
import { Logo } from "./Logo";
import { RouterConfig } from "../../routes/RouterConfig";

const NavList = styled.ul``;

export const Nav = () => {
  return (
    <>
      <a href="/">
        <Logo />
      </a>
      <nav>
        <NavList>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </NavList>
      </nav>
      <RouterConfig />
    </>
  );
};
