import React from 'react';
import './kontakt.css';
import bgBild from '../../assets/IMG-0116.jpg';
import logo from '../../assets/logga.png';
import { FaEnvelope, FaMobileAlt, FaAt, FaArrowRight, FaUser, FaEnvelopeOpenText } from "react-icons/fa";

const Kontakt = () => {
    return (
        <div className="hdms__kontakt" id="Kontakt">
            <div className="hdms__kontakt-arrow"></div>
            <div className="hdms__kontakt-bgDiv">
                <img src={bgBild} alt="bgBild" className="hdms__kontakt-bgBild" />
            </div>
            <div className="hdms__kontakt-content">
                <div className="hdms__kontakt-info">
                    <h1>Kontaktinformation</h1>
                    <div className="hdms__kontakt-info_content">
                        <div className="hdms__kontakt-info_content-box">
                            <FaEnvelope /><p>Postmästaregatan 64<br />703 78 Örebro</p>
                        </div>
                        <div className="hdms__kontakt-info_content-box">
                            <FaMobileAlt /><p>070 789 98 99 - Henrik D<br />070 611 48 42 - Martin S</p>
                        </div>
                        <div className="hdms__kontakt-info_content-box">
                            <FaAt /><p>info@hdms.se</p>
                        </div>
                    </div>
                    <img src={logo} alt="logga" />
                </div>
                <div className="hdms__kontakt-info_arrow"></div>
                <div className="hdms__kontakt-form">
                    <p>Kontakta oss via vårat kontaktformulär så återkopplar vi så snart vi kan!</p>
                    <form method="POST" action="#">
                        <div className="hdms__kontakt-form_input">
                            <label for="name">Namn*</label>
                            <input type="text" id="name" name="name" />
                            <div className="hdms__kontakt-form_input-icon">
                                <FaUser />
                            </div>
                        </div>
                        <div className="hdms__kontakt-form_input">
                            <label for="phone">Telefonnummer*</label>
                            <input type="text" id="phone" name="phone" />
                            <div className="hdms__kontakt-form_input-icon">
                                <FaMobileAlt />
                            </div>
                        </div>
                        <div className="hdms__kontakt-form_input">
                            <label for="email">Epost*</label>
                            <input type="email" id="email" name="email" />
                            <div className="hdms__kontakt-form_input-icon">
                                <FaAt />
                            </div>
                        </div>
                        <div className="hdms__kontakt-form_input">
                            <label for="message">Meddelande*</label>
                            <textarea id="message" name="message"></textarea>
                            <div className="hdms__kontakt-form_input-icon_textarea">
                                <FaEnvelopeOpenText />
                            </div>
                        </div>
                        <button type="submit" className="hdms__kontakt-form_btn">
                            Skicka&nbsp;&nbsp;&nbsp;<FaArrowRight />
                            <div className="hdms__kontakt-form-btn_hover"></div>
                        </button>
                    </form>
                    <div className="brev">
                        <FaEnvelope />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kontakt