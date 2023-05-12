import styled from "styled-components"
import HomeIcon from "../assets/home_icon.svg"

export const Line = styled.div`
display: none;

@media (min-width: 1000px) {
display: block;
height: 1.5px;
position: absolute;
width: 34%;
margin-left: 8em;
margin-top: 2em;
z-index: 1;
background: #FFFFFF80;
mix-blend-mode: normal;
opacity: 0.25;
}
`

export const Container = styled.header`
width: 60%;
position: absolute;
top: 0;
right: 0;

@media (min-width: 700px) {
    top: 0;
  }

  @media (min-width: 1000px) {
    top: 3em;
  }
`

export const Icon = styled.div`
background-image: url(${HomeIcon?.src});
height: 60px;
width: 60px;
position: absolute;
left: 42px;
top: 70px;
background-repeat: no-repeat;

@media (min-width: 700px) {
    top: 30px;
  }

  @media (min-width: 1000px) {
    top: 70px;
  }
`

export const Navbar = styled.nav`
height: 100vh;
background: rgba( 255, 255, 255, 0.35 );
    backdrop-filter: blur( 50.5px );
    -webkit-backdrop-filter: blur( 13.5px );
  display: none;


  &.nav--visible {
    display: block;
  }

  @media (min-width: 700px) {
    display: block;
    height: 6em;
    background: rgba( 255, 255, 255, 0.10 );
    backdrop-filter: blur( 50.5px );
    -webkit-backdrop-filter: blur( 50.5px )
  }
`

export const Button = styled.div`
@media (min-width: 700px) {
    display: none;
  }
`

export const ButtonHamburguer = styled.button`
position: absolute;
right: 40px;
top: 70px;
z-index: 1;
`

export const List = styled.ul`
list-style: none;
font-family: 'Barlow Condensed';
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 1.25rem;
letter-spacing: 2.7px;
color: #FFFFFF;
padding-top: 10em;

li {
  padding: 1.2em 0;
}

span {
  font-weight: 700;
}

@media (min-width: 700px) {
display: flex;
padding-top: 2em;
justify-content: space-around;
padding-left: 0;
font-size: .8rem;
line-height: 1.125rem;
}

@media (min-width: 1000px) {
gap: 3em;
padding-top:1.8em;
margin-left: 3em;
}
`
