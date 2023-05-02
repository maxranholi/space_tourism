import React, { useState } from "react";
import * as H from "../../styles/header";
import icon from "../../public/home-icon.png";
import Link from "next/link";

export function Header() {
  const [toggleMenu, setToggleMenu] = useState("disabled");

  const toggleState = () => {
    if (toggleMenu === "disabled") {
      setToggleMenu("active");
    } else {
      setToggleMenu("disabled");
    }
  };

  return (
    <H.Header id="header">
      <H.Nav id="nav" className={toggleMenu}>
        <H.HeaderLine />

        <H.BtnMobile
          onClick={() => toggleState()}
          aria-label="Abrir Menu"
          id="btn-mobile"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
        >
          <H.Hamburger id="hamburger"></H.Hamburger>
        </H.BtnMobile>
        <H.HeaderOptions>
          <H.MenuUl id="menu" role="menu">
            <li>
              <H.MenuLi onClick={() => setToggleMenu("disabled")}>
                <Link list-style="none" href="/">
                  Home
                </Link>
              </H.MenuLi>
            </li>
            <li>
              <H.MenuLi onClick={() => setToggleMenu("disabled")}>
                <Link href="/destination">Destination</Link>
              </H.MenuLi>
            </li>
            <li>
              <H.MenuLi onClick={() => setToggleMenu("disabled")}>
                <Link href="/crew">Crew</Link>
              </H.MenuLi>
            </li>
            <li>
              <H.MenuLi onClick={() => setToggleMenu("disabled")}>
                <Link href="/techonology">Techonology</Link>
              </H.MenuLi>
            </li>
          </H.MenuUl>
        </H.HeaderOptions>
      </H.Nav>
    </H.Header>
  );
}
