import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  display: flex;
  height: 6rem;
  justify-content: end;
  margin-top: -4em;  

  @media (max-width: 768px) {
    justify-content: end;
    margin-top: 0;
  }
`;

export const HeaderLine = styled.div`
  content: "";
  font-size: 1rem;
  height: 3rem;
  border-bottom: 1px #ffffff40 solid;
  width: 33vw;
  z-index: 1;
  position: absolute;
  left: 10vw;
  color: transparent;

  @media (max-width: 1126px) {
    display: none;
  }
`;

export const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 60vw;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 4px 0 0 4px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 0;
  }
`;

export const MenuUl = styled.ul`
  display: flex;
  position: relative;
  font-family: "roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8em;
  line-height: 19px;
  letter-spacing: 2.7px;
  list-style: none;
  gap: 3em;
  margin-left: 2em;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    width: 100%;
    top: 70px;
    right: 0px;
    background: #e65219;
    transition: 0.6s;
    z-index: 1000;
    height: 0px;
    visibility: hidden;
    overflow-y: hidden;
  }
`;

export const MenuLi = styled.li`
  a {
    text-decoration: none;
    color: #ffffff99;
    position: relative;

    :hover {
      color: #ffffff;
    }
  }
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

  @media (max-width: 768px) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
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
    bottom: -1.6em;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #ffff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 500ms;
    transition-property: width, left;
  }
`;

export const BtnMobile = styled.button`
  display: none;
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
    border-top: 2px solid;
    width: 20px;
    color: #ffff;
    &::after,
    ::before {
      content: "";
      display: block;
      width: 20px;
      height: 2px;
      margin-top: 5px;
      transition: 0.3s;
      position: relative;
      background-color: #ffff;
    }
  }
`;

export const Nav = styled.nav`
  @media (max-width: 768px) {
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
      top: -7px;
    }
    &.active #menu {
      height: calc(100vh - 70px);
      visibility: visible;
      overflow-y: auto;
    }
  }
`;
