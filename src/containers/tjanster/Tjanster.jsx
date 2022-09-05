import React from 'react';
import './tjanster.css';
import { Tjanst } from '../../components';
import hissmontage from '../../assets/hissmontage.jpg';
import hdms from '../../assets/hdms.jpg';
import hdmsjobb from '../../assets/hdmsjobb.jpg';
import byggvarme from '../../assets/IMG-0113.jpg';
import snickeri from '../../assets/tjansterbilden.jpg';
import betongarbete from '../../assets/IMG-0122.jpg';
import ovrigt from '../../assets/IMG-0116.jpg';

const Tjanster = () => {
    return (
        <div className="hdms__tjanster" id="Tjanster">
            <div className="hdms__tjanster-arrow"></div>
            <img src={hissmontage} alt="hissmontage" className="hdms__tjanster-background" />
            <div className="hdms__tjanster-header">
                <h1 className="gradient__text">Vilka tjänster erbjuder vi ?</h1>
                <hr />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text <br />
                    ever since the 1500s, when an unknown printer took a galley of type 
                    and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className="hdms__tjanster-content">
                <Tjanst title="Hissmontage" img={hdms} />
                <Tjanst title="Köldskydd" img={hdmsjobb} />
                <Tjanst title="Byggvärme" img={byggvarme} />
                <Tjanst title="Snickeri" img={snickeri} />
                <Tjanst title="Betongarbete" img={betongarbete} />
                <Tjanst title="Övrigt" img={ovrigt} />
            </div>
        </div>
    )
}

export default Tjanster