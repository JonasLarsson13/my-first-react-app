import React from 'react';
import './footer.css';
import logo from '../../assets/logga.png';
import { FaArrowUp } from "react-icons/fa";
import { Link } from 'react-scroll';


const Footer = () => {
    return (
        <div className="hdms__footer">
            <div className="hdms__foter-toTop">
                <Link
                    to="Start"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}>
                    <p>
                        <FaArrowUp />
                    </p>
                </Link>
            </div>
            <img src={logo} alt="logga" />
            <div className="hdms__footer-content">
                <div className="hdms__footer-heading">
                    <h1 className="gradient__text">Tveka inte, Hör av dig!</h1>
                    <hr />
                </div>
                <div className="hdms__footer-links">
                    <Link
                    to="Start"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}>
                        <p>
                            <FaArrowUp /> Start
                        </p>
                    </Link>
                    <Link
                    to="Tjanster"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1200}>
                        <p>
                            <FaArrowUp /> Tjänster
                        </p>
                    </Link>
                    <Link
                    to="OmOss"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}>
                        <p>
                            <FaArrowUp /> Om Oss
                        </p>
                    </Link>
                    <Link
                    to="Kontakt"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={400}>
                        <p>
                            <FaArrowUp /> Kontakt
                        </p>
                    </Link>
                </div>
            </div>
            <div className="hdms__footer-copyright">
                <p>&copy; HDMS.se 2022</p>
            </div>
        </div>
    )
}

export default Footer