import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logga.png';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const Menu = () => (
        <>
            <p>
                <Link
                    to="Start"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                    onClick={() => setToggleMenu(false)}>
                    Start
                </Link>
                <div className="hdms__navbar-links_border"></div>
            </p>
            <p>
            <Link
                    to="Tjanster"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                    onClick={() => setToggleMenu(false)}>
                    Tjänster
                </Link>
                <div className="hdms__navbar-links_border"></div>
            </p>
            <p>
            <Link
                    to="OmOss"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1200}
                    onClick={() => setToggleMenu(false)}>
                    Om Oss
                </Link>
                <div className="hdms__navbar-links_border"></div>
            </p>
        </>
    )
    return (
        <div className="hdms__navbar" id="Start">
            <div className="linje1"></div>
            <div className="linje2"></div>
            <div className="linje3"></div>
            <div className="linje4"></div>
            <div className="linje5"></div>
            <div className="linje6"></div>
            <div className="linje7"></div>
            <div className="hdms__navbar-links">
                <div className="hdms__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="hdms__navbar-links_container">
                    <Menu />
                    <p>
                    <Link
                            to="Kontakt"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1500}>
                            Kontakt
                        </Link>
                        <div className="hdms__navbar-links_border"></div>
                    </p>
                </div>
            </div>
            <div className="hdms__navbar-kontakt">
            <Link
                to="Kontakt"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
                onClick={() => setToggleMenu(false)}>
                <button type="button">Kontakt</button>
            </Link>
            </div>
            <div className="hdms__navbar-menu">
            {toggleMenu 
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> 
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
                <div className="hdms__navbar-menu_container scale-up-center">
                    <div className="hdms__navbar-menu_container-links">
                        <Menu />
                        <div className="hdms__navbar-menu_container-links-kontakt">
                        <Link
                            to="Kontakt"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1500}
                            onClick={() => setToggleMenu(false)}>
                            <button type="button">Kontakt</button>
                        </Link>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default Navbar
