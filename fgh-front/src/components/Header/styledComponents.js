// @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap');
import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Navbar = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 3vw;
    padding-right: 3vw;
    background-color: #2a3543;
    color: #d9d9d9
`

export const NavLink = styled(Link)`
    text-decoration: none;
    margin-right: 10px;
    margin-left: 10px;
    font-weight: 700;
    color: ${props => props.status? '#4379d5' : '#d9d9d9'};
`

export const Logo = styled.h1 `
    font-family: "Times New Roman";
`