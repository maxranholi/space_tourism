import styled from "styled-components"
import desktopImage from "../assets/background-home-desktop.jpg"


export const Container = styled.main`
background-image: url(${desktopImage?.src});
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: end;
`

export const TitleAndButoon = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 0 6em;
`
export const TitleContainer = styled.section`
display: flex;
flex-direction: column;
`
export const MainTitle = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
font-family: 'Bellefair', "sans-serif";
font-style: normal;
font-weight: 400;
font-size: 8rem;
line-height: 10rem;
color: #FFFFFF;
`

export const SecondTitle = styled.h2`
font-family: 'roboto', "sans-serif";
font-style: normal;
font-weight: 300;
font-size: 1.45;
line-height: 34px;
letter-spacing: 4.725px;
color: #D0D6F9;
`
export const Paragraphy = styled.p`
font-family: "roboto", "sans-serif";
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 32px;
color: #D0D6F9;
max-width: 26em;
`

export const Button = styled.button`
 font-family: 'Bellefair';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  letter-spacing: 2px;
  color: #0B0D17;
  width: 7em;
  height: 7em;
  border-radius: 50%;
  border: none;
  outline: none; 
  margin: 2em 4em 0 0;
  cursor: pointer;
  transition: 0.8s;

  &:hover {
    outline: 60px #ffffff40 solid;
    transition: 0.8s;
  }

  &:not(:hover) {
    outline: none; 
    transition: 0.8s;
  }
`

