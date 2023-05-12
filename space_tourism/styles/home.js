import styled from "styled-components";
import desktopImage from "../assets/background-home-desktop.jpg";
import tabletImage from "../assets/background-home-tablet.jpg";
import mobileImage from "../assets/background-home-mobile.jpg";
import logo from "../assets/home_icon.svg";

// export const Logo = styled.div`
// background-image: url(${logo?.src});
// height: 50px;
// width: 50px;
// background-repeat: no-repeat;
// `

export const Container = styled.main`
  background-image: url(${mobileImage?.src});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  padding: 4em 0;

  @media (min-width: 700px) {
    background-image: url(${tabletImage?.src});
  }

  @media (min-width: 1000px) {
    background-image: url(${desktopImage?.src});
  }
`;

export const TitleAndButton = styled.div`
  width: 84%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 8em;
  gap: 5em;

  @media (min-width: 1000px) {
    flex-direction: row;
    margin-top: 12em;
    width: 80%;
  }
`;

export const TitleContainer = styled.div``;

export const MainTitle = styled.h1`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 5rem;
  line-height: 6.25rem;
  text-align: center;
  color: #ffffff;
  padding: 1.5rem;

  @media (min-width: 700px) {
    font-size: 9.375rem;
    line-height: 9.375rem;
  }

  @media (min-width: 1000px) {
    line-height: 10.75rem;
    padding: 0.5rem 0;
    text-align: start;
  }
`;
export const SecondTitle = styled.h2`
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.188rem;
  text-align: center;
  letter-spacing: 2.7px;
  color: #d0d6f9;

  @media (min-width: 700px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.8rem;
    line-height: 2.125rem;
    text-align: start;
  }
`;

export const Paragraphy = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.563rem;
  text-align: center;
  color: #d0d6f9;
  max-width: 300px;

  @media (min-width: 700px) {
    font-size: 1rem;
    line-height: 1.75rem;
    max-width: 470px;
  }

  @media (min-width: 1000px) {
    font-size: 1.125rem;
    line-height: 2rem;
    max-width: 430px;
    text-align: start;
  }
`;

export const Button = styled.button`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.438rem;
  letter-spacing: 0.078rem;
  color: #0b0d17;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.8s;
  height: 8em;
  width: 8em;
  border-radius: 100%;

  :hover {
    outline: 60px #ffffff40 solid;
    transition: 0.8s;
  }

  :after {
    outline: none;
    transition: 0.8s;
  }

  @media (min-width: 700px) {
    font-size: 1.8rem;
    line-height: 1.8rem;
  }

  @media (min-width: 1000px) {
    font-size: 2.5rem;
    line-height: 1.8rem;
  }
`;
