import styled from "styled-components";
import desktopImage from "../assets/background-home-desktop.jpg";
import tabletImage from "../assets/background-home-tablet.jpg";
import mobileImage from "../assets/background-home-mobile.jpg";

export const Container = styled.main`
  background-image: url(${desktopImage?.src});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: end;

  @media (max-width: 900px) {
    background-image: url(${tabletImage?.src});
    justify-content: space-between;
  }

  @media (max-width: 700px) {
    background-image: url(${mobileImage?.src});
  }
`;

export const TitleAndButoon = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: 10vw;
  align-items: end;
  padding: 0 2em;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 4em;
    padding-bottom: 6em;
  }

  @media (max-width: 900px) {
    padding-bottom: 4em;
  }
`;
export const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    text-align: center;
  }
`;
export const MainTitle = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
  font-family: "Bellefair", "sans-serif";
  font-style: normal;
  font-weight: 400;
  font-size: 8rem;
  line-height: 10rem;
  color: #ffffff;

  @media (max-width: 700px) {
    font-size: 6rem;
  }
`;

export const SecondTitle = styled.h2`
  font-family: "roboto", "sans-serif";
  font-style: normal;
  font-weight: 300;
  font-size: 1.45;
  line-height: 34px;
  letter-spacing: 4.725px;
  color: #d0d6f9;

  @media (max-width: 900px) {
    font-size: 1.25rem;
  }

  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;
export const Paragraphy = styled.p`
  font-family: "roboto", "sans-serif";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 32px;
  color: #d0d6f9;
  max-width: 26em;

  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  letter-spacing: 2px;
  color: #0b0d17;
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.8s;

  :hover {
    outline: 60px #ffffff40 solid;
    transition: 0.8s;
  }

  :after {
    outline: none;
    transition: 0.8s;
  }

  @media (max-width: 700px) {
    width: 12rem;
    height: 12rem;
    font-size: 26px;
  }
`;
