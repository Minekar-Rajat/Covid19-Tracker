import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap';

const Header = () => {

    const [isOpen, setisOpen] = useState(true);
    const toggle = () => setisOpen(!isOpen);


    const statClass = window.location.pathname === "/stat" ? "active" : "";
    const sympClass = window.location.pathname.match(/^\/symptom/) ? "active" : "";
    const prevClass = window.location.pathname.match(/^\/prevention/) ? "active" : "";
    const helpClass = window.location.pathname.match(/^\/helpline/) ? "active" : "";




    return (
        <div className='nav-fix '>
            <Navbar expand='md' className='nav-clr' dark>
                <NavbarBrand href='/stat'><img src='./images/logo.jpg' alt="logo" width='130' className='logo img-fluid' /></NavbarBrand>
                <NavbarToggler onClick={toggle} className='white' />
                <Collapse navbar isOpen={!isOpen}>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className={statClass + ' link-txt '} href='/stat' id='stat'  >Stats</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={sympClass + ' link-txt '} href='/symptom' id='symp' >Symptoms</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={prevClass + ' link-txt'} href='/prevention' id='prev' >Preventions</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={helpClass + ' link-txt'} href='/helpline' id='help' >Helpline</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
