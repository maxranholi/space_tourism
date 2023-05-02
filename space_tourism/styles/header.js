import styled from "styled-components"

export const Header = styled.header`
width: 100%;
display: flex;
justify-content: space-between;
height: 5rem;
margin-top: -4em;
`

export const HeaderLine = styled.div`
font-size: 2rem;
color: white;
`

export const HeaderOptions = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 60%;
background: rgba( 255, 255, 255, 0.10 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 4px 0 0 4px;
`

export const List = styled.ul`
display: flex;
font-family: 'roboto';
font-style: normal;
font-weight: 400;
font-size: 0.8rem;
line-height: 19px;
letter-spacing: 2.7px;
color: #FFFFFF;
gap: 4em;
list-style: none;
margin-left: -10em;


`

export const ItensList = styled.li`

    border-bottom: #FFFFFF;

`