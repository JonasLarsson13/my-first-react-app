import React from 'react';
import './header.css';
import { FaCheck } from "react-icons/fa";
import hiss from '../../assets/Hisspng.png';

const Header = () => {
    return (
        <div className="hdms__header">
            <div className="hdms__header-content">
                <h1 className="gradient__text">
                    Välkommen till
                    <h2 className="gradient__text">
                        HD/MS Hissmontage & Byggservice
                    </h2>
                </h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
                </p>
                <div className="hdms__header-content__tjanster">
                    <span>
                        <FaCheck color="green" size="17" /><h4>Hissmontage</h4> 
                    </span>
                    <span>
                        <FaCheck color="green" size="17" /><h4>Köldskydd & Värme</h4> 
                    </span>
                    <span>
                        <FaCheck color="green" size="17" /><h4>Byggservice</h4>
                    </span>
                </div>
            </div>
            <div className="hdms__header-image">
                <img src={hiss} alt="hiss" />
            </div>
        </div>
    )
}

export default Header