import React from 'react';
import './brand.css';
import { cramo, lambertsson, peab, renta } from './imports';

const Brand = () => {
    return (
        <div className="hdms__brand section__padding">
            <div>
                <img src={cramo} alt="cramo" />
            </div>
            <div>
                <img src={lambertsson} alt="lambertsson" />
            </div>
            <div>
                <img src={peab} alt="peab" />
            </div>
            <div>
                <img src={renta} alt="renta" />
            </div>
        </div>
    )
}

export default Brand