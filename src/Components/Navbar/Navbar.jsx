import { useState, useEffect } from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { NavLink, Link } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import i18next from "i18next";
import { useTranslation } from 'react-i18next';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './navbar.scss';

const language = [
    {
        code: "uz",
        name: "Uzb",
        country: "uz",
    },
    {
        code: "ru",
        name: "Rus",
        country: "ru",
    },
    {
        code: "eng",
        name: "Eng",
        country: "gb",
    }
];

export default function Navbar() {
    const [menu, setMenu] = useState(false);

    const collapsemenu = function () {
        setMenu(menu === false ? true : false);
    }

    let logo = [
        '<Fully/>',
        '<Developed/>'
    ]
    const { t } = useTranslation();

    const [sticky, setSticky] = useState(false);

    const activeSticky = function () {
        if (window.scrollY <= 500) {
            setSticky(true)
        } else {
            setSticky(false);
        }
    }

    useEffect(() => {
        activeSticky()
    }, []);


    window.addEventListener('scroll', activeSticky)

    return (
        <section id={sticky ? 'navbar' : "active-nav"}>
            <nav>
                <Link to="/">
                    <div className="logo">
                        <span className="logo1">{logo[0]}</span>
                        <span className="logo2">{logo[1]}</span>
                    </div>
                </Link>
                <div className="hamburger-menu">
                    < MenuOpenIcon onClick={collapsemenu} style={{ width: '70%', height: '50px' }} />
                </div>
                <div className="collapsed">
                    <ul className={`navbar-nav ${menu ? 'is-expended' : ''}`}>
                        <li className="nav-item">
                            <NavLink to="/" activeClass="active" className="nav-link">
                                {t("home")}
                            </NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink to="/about" className="nav-link" activeClass="active">
                                {t("about")}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/service" className="nav-link" activeClass="active">
                                {t("service")}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link" activeClass="active">
                                {t("project")}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link" activeClass="active">
                                {t("contact")}
                            </NavLink>
                        </li>
                        <div className="languages">
                            <div class="dropdown">
                                <button class="dropbtn"><LanguageIcon />
                                    <span className="fi fi-gr"></span> <span className="fi fi-gr fis"></span>
                                    {t("language")} <KeyboardArrowDownIcon /></button>
                                <div class="dropdown-content">
                                    {language.map(({ code, name, country }) => (
                                        <button onClick={() => i18next.changeLanguage(code)}>
                                            <i className={`flag-icon flag-icon-${country}`}></i>

                                            &nbsp; {name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </section>
    )
}