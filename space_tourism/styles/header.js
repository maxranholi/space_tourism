import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  display: flex;
  height: 6rem;
  justify-content: end;
  margin-top: -4em;

  @media (max-width: 900px) {
    margin-top: 0;
  }

  @media (max-width: 700px) {
    align-items: center;
    justify-content: end;
  }
`;

export const HeaderLine = styled.div`
  content: "";
  font-size: 1rem;
  height: 3rem;
  border-bottom: 1px #ffffff40 solid;
  width: 35vw;
  z-index: 1;
  position: absolute;
  left: 10vw;
  color: transparent;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const HeaderOptions = styled.div`
  @media (max-width: 900px) {
    width: auto;
    justify-content: center;
    padding-right: 1em;
  }

  @media (max-width: 700px) {
    padding-right: 0;
    justify-content: flex-start;
  }
`;

export const MenuUl = styled.ul`
  padding: 0 10% 0 3em;
  height: 6em;
  border-radius: 4px 0 0 4px;
  display: flex;
  align-items: center;
  list-style: none;
  gap: 4rem;
  margin-left: 2em;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);

  @media (max-width: 900px) {
    gap: 2rem;
  }

  @media (max-width: 700px) {
    display: block;
    flex-direction: column;
    justify-content: space-evenly;
    position: absolute;
    width: 60%;
    top: 70px;
    right: 0px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    visibility: hidden;
    overflow-y: hidden;
  }
`;

export const MenuLi = styled.li`
  font-family: "roboto", "sans-serif";
  display: block;
  padding: 0.5rem;
  font-size: 1.2rem;
  color: #ffff;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  border: none;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 500ms;
  transition-property: color;

  &:focus:after {
    width: 100%;
    left: 0%;
  }
  &:hover:after {
    width: 100%;
    left: 0%;
  }
  &:after {
    content: "";
    pointer-events: none;
    bottom: -25px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #ffff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 500ms;
    transition-property: width, left;
  }
  @media (max-width: 900px) {
    font-size: 1rem;
  }

  @media (max-width: 700px) {
    margin-top: 2em;
    line-height: 0.5em;
    color: #ffffff;
    font-size: 2rem;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #ffffff99;
    position: relative;

    :hover {
      color: #ffffff;
    }
  }
`;

export const BtnMobile = styled.button`
  display: none;
  @media (max-width: 700px) {
    display: flex;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    gap: 0.5rem;
  }
`;

export const Hamburger = styled.span`
  @media (max-width: 700px) {
    border-top: 4px solid;
    width: 30px;
    color: #ffff;
    &::after,
    ::before {
      content: "";
      display: block;
      width: 30px;
      height: 4px;
      margin-top: 5px;
      transition: 0.3s;
      position: relative;
      background-color: #ffff;
    }
  }
`;

export const Nav = styled.nav`
  @media (max-width: 700px) {
    &.active #hamburger {
      border-top-color: transparent;
    }
    &.active #hamburger::before {
      transform: rotate(135deg);
      background: #ffff;
    }
    &.active #hamburger::after {
      transform: rotate(-135deg);
      background-color: #ffff;
      top: -9px;
    }
    &.active #menu {
      height: calc(100vh - 70px);
      visibility: visible;
      overflow-y: auto;
    }
  }
`;
