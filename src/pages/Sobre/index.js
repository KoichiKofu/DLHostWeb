import React from 'react';

import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import Rating from '../../components/Rating';
import Chat from '../../components/Chat';

import './style.css';

export default function Sobre() {
    return (
        <>
            <Chat />
            <Menu />
            <div id="sobre">
                <h1>Nossas informações</h1>
            </div>
            <Rating />
            <Rodape />
        </>
    );
}