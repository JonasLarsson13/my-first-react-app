import React from 'react';


import { Footer, Tjanster, OmOss, Header, Kontakt } from './containers';
import { Brand, Navbar } from './components';
import './App.css';


const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Tjanster />
            <OmOss />
            <Kontakt />
            <Footer />
        </div>
    )
}

export default App