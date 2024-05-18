import './nav_bar.css'
import React from "react";
import react from "react";

type NavBarProps = {
    children: React.ReactNode,
    visible: boolean;
}

const NavBar: react.FC<NavBarProps> = ({children, visible}) => {
    return (
        <div className={`nav_bar ${visible ? 'visible' : 'hidden'}`}>
            {children}
        </div>
    )
}

export default NavBar;