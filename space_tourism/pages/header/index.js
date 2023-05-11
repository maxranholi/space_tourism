import React, { useState } from "react";
import * as S from "../../styles/header";
import icon from "../../public/home-icon.png";
import Link from "next/link";

export function Nav() {
  const [visible, setVisible] = useState(false);

  function toggleNav() {
    setVisible(!visible);
  }

  return (
    <S.Wrapper>
      <S.Icon />
      <S.Container>
        <S.Button>
          <S.ButtonHamburguer onClick={toggleNav} aria-label="open navigation">
            X
          </S.ButtonHamburguer>
        </S.Button>
        <S.Navbar className={visible ? "nav--visible" : ""}>
          <S.List>
            <li>
              <span>00</span> HOME
            </li>
            <li>
              <span>01</span> DESTINATION
            </li>
            <li>
              <span>02</span> CREW
            </li>
            <li>
              <span>03</span> TECHONOLOGY
            </li>
          </S.List>
        </S.Navbar>
      </S.Container>
    </S.Wrapper>
  );
}
