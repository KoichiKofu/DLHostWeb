import React from 'react';

import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import Services from '../../components/Services';
import Rating from '../../components/Rating';
import Slides from '../../components/Slides';
import Chat from '../../components/Chat';

import './style.css';

function Shop() {
    return (
        <>
            <Chat />
            <Menu />
            <div id="shopping">
                <div id="planos">
                    <Services />
                </div>
                <div id="slides_main">
                    <h1 className="text_title">Planos</h1>
                    <Slides />
                </div>
            </div>
            <Rating />
            <Rodape />
        </>
    );
}

export default Shop;