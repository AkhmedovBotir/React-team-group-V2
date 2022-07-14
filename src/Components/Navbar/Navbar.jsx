import { useState } from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {
    const [menu, setMenu] = useState(false);

    const collapsemenu = function () {
        setMenu(menu === false ? true : false);
    }

    let logo = [
        '<Fully/>',
        '<Developed/>'
    ]
    return (
        <section id="navbar">
            <nav>
                <div className="logo">
                    <span className="logo1">{logo[0]}</span>
                    <span className="logo2">{logo[1]}</span>
                </div>
                <div className="hamburger-menu">
                    < MenuOpenIcon onClick={collapsemenu} style={{width: '70%', height: '50px'}}/>
                </div>
                <div className="collapsed">
                    <ul className={`navbar-nav ${menu ? 'is-expended' : ''}`}>
                        <li className="nav-item">
                            <NavLink to="/" activeClass="active" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink to="/about" className="nav-link" activeClass="active">
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/service" className="nav-link" activeClass="active">
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link" activeClass="active">
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link" activeClass="active">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    )
}