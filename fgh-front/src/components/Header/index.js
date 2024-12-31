import { Component } from "react";
import {Navbar, NavLink, Logo} from './styledComponents'

import HeaderContext from "../../contexts/HeaderContext";

class Header extends Component{
    render(){
        return(
            <HeaderContext.Consumer>
                {value =>{
                    const {activeTab, changeTab} = value 
                    const onclickTab = (event) => {
                        changeTab(event.target.id)
                    }
                    return(
                        <Navbar className="navbar">
                        <Logo>FGH</Logo>
                        <ul className="nav-links">
                            <NavLink 
                                onClick={onclickTab} 
                                status={activeTab==="home"} 
                                id="home" 
                                to="/">
                                    Home
                            </NavLink>
                            <NavLink 
                                onClick={onclickTab} 
                                status={activeTab==="features"} 
                                id="features" 
                                to="/features">
                                    Features
                            </NavLink>
                            <NavLink 
                                onClick={onclickTab} 
                                status={activeTab==="aboutUs"} 
                                id="aboutUs" 
                                to="/about-us">
                                    About Us
                            </NavLink>
                            <NavLink 
                                onClick={onclickTab} 
                                status={activeTab==="ourTeam"} 
                                id="ourTeam" 
                                to="/our-team">
                                    Our Team
                            </NavLink>
                            <NavLink 
                                onClick={onclickTab} 
                                status={activeTab==="faq"} 
                                id="faq" 
                                to="/faq">
                                    FAQ
                            </NavLink>
                            <NavLink 
                                onClick={onclickTab} 
                                status={activeTab==="contactUs"} 
                                id="contactUs" 
                                to="/contact-us">
                                    Contact Us
                            </NavLink>
                        </ul>
                    </Navbar>
                    )
                }}
            </HeaderContext.Consumer>
        )
    }
}

export default Header