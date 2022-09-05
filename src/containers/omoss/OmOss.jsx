import React from 'react';
import './omoss.css';
import logo from '../../assets/logga.png';

const OmOss = () => {
    return (
        <div className="hdms__omoss" id="OmOss">
            <div className="hdms__omoss-arrow"></div>
            <div className="hdms__omoss-feature">
                <div className="hdms__omoss-heading">
                    <h1 className="gradient__text">om HD/MS</h1>
                    <hr />
                </div>
                <div className="hdms__omoss-container">
                    <div className="hdms__omoss-container_image">
                        <div className="hdms__omoss-container_image-bg2">
                            <div className="hdms__omoss-container_image-bg">
                                <img src={logo} alt="logga" />
                            </div>
                        </div>
                    </div>
                    <div className="hdms__omoss-container_text">
                        <div className="hdms__omoss-container_text-box">
                            <p>
                                Ett litet företag med ambition att.... Lorem Ipsum 
                                is simply dummy text of the printing and 
                                typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 
                                1500s, when an unknown printer took a galley of 
                            </p>
                        </div>
                        <div className="hdms__omoss-container_text-box">
                            <p>
                                HD/MS Grundades redan 2000 av blabla... Lorem Ipsum 
                                is simply dummy text of the printing and 
                                typesetting industry.<br /><br />
                                Lorem Ipsum 
                                is simply dummy text of the printing and 
                                typesetting industry.Lorem Ipsum 
                                is simply dummy text of the printing and 
                            </p>
                        </div>
                    </div>
                    <div className="hdms__omoss-container_text">
                        <div className="hdms__omoss-container_text-box">
                            <p>
                                Ett litet företag med ambition att.... Lorem Ipsum 
                                is simply dummy text of the printing and 
                                typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 
                                1500s, when an unknown printer took a galley of 
                            </p>
                        </div>
                        <div className="hdms__omoss-container_text-box">
                            <p>
                                HD/MS Grundades redan 2000 av blabla... Lorem Ipsum 
                                is simply dummy text of the printing and 
                                typesetting industry.<br /><br />
                                Lorem Ipsum 
                                is simply dummy text of the printing and 
                                typesetting industry.Lorem Ipsum 
                                is simply dummy text of the printing and 
                            </p>
                        </div>
                    </div>
                </div>
                <h1 className="gradient__text grundare">Grundare</h1>
                <hr />
                <div className="hdms__omoss-container_text-box_VDs">
                    <div className="hdms__omoss-container_text-box-vd">
                        <div className="hdms__omoss-container_text-box_VD">
                            
                        </div>
                        <div className="hdms__omoss-container_text-box_text">
                            <h2>Namn Efternamn</h2>
                            <h3>lite värdefull info?</h3>
                            <p>- Kontaktinformation o sånt</p>
                        </div>
                    </div>
                    <div className="hdms__omoss-container_text-box-vd">
                        <div className="hdms__omoss-container_text-box_VD">
                            
                        </div>
                        <div className="hdms__omoss-container_text-box_text">
                            <h2>Namn Efternamn</h2>
                            <h3>lite värdefull info?</h3>
                            <p>- Kontaktinformation o sånt</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OmOss