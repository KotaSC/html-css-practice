import styled from "styled-components";
import { Logo } from "./Logo";

const NavList = styled.ul`
  display: flex;
  font-size: 1.25rem;
  text-transform: uppercase;
  margin-top: 34px;
  list-style: none;
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-top: 10px;
  }
`;

const NavItem = styled.li`
  margin-left: 36px;
  @media (max-width: 600px) {
    margin: 0 20px;
  }
`;

const NavLink = styled.a`
  color: #432;
  &:hover {
    color: #0bd;
  }
`;

export const Nav = () => {
  return (
    <>
      <a href="/">
        <Logo />
      </a>
      <nav>
        <NavList>
          <NavItem>
            <NavLink href="/news">News</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/menu">Menu</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
        </NavList>
      </nav>
    </>
  );
};
