import React, { useState } from 'react';
import './tjanst.css';
import { RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-scroll';

const Tjanst = ({ title, img }) => {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
    setActive(!isActive);  };
    return (
        <div className="hdms__tjanst" onClick={handleToggle}>
            <div className={isActive ? "hdms__tjanst-image" : "hdms__tjanst-image active"}>
                <div className={isActive ? "hdms__tjanst-content" : "hdms__tjanst-content active"}></div>
                <div className={isActive ? "hdms__tjanst-image_hover" : "hdms__tjanst-image_hover active"}></div>
                <img src={img} alt={title} className={isActive ? "hdms__tjanst-img" : "hdms__tjanst-img active"} />
                <button className={isActive ? "hdms__tjanst-content_btn" : "hdms__tjanst-content_btn active"} onClick={handleToggle}>{title}</button>
                <button className={isActive ? "hdms__tjanst-content_btn-screen" : "hdms__tjanst-content_btn-screen active"} onClick={handleToggle}><RiCloseLine size={30} /></button>
                <div className={isActive ? "hdms__tjanst-content" : "hdms__tjanst-content active"}>
                    <h1 className="gradient__text">{title}</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book.
                    </p>
                    <Link
                        to="Kontakt"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={800}>
                        <button className="hdms__tjanst-content_kontakt-btn">Kontakta oss</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Tjanst