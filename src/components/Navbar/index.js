import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElement";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/analytics" activeStyle>
                        Boba Trends
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;