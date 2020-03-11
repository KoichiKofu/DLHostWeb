import React from 'react';

import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import Item from '../../components/Item';
import Rating from '../../components/Rating';
import Chat from '../../components/Chat';

import './style.css';

function Main() {
    var user = { name: "Nossos clientes", image: "/images/user.png" };
    var hpe = { name: "Nossa máquina", image: "/images/hpe.png" };
    return (
        <>
            <Chat />
            <Menu />
            <div id='datacenter'>
            </div>
            <div id='container'>
                <h1 id='title'>Novidades</h1>
                <div id='adverts'>
                    <iframe src='/teste.html' scrolling='no' title='frameDLHost'></iframe>
                </div>
                <div id='informations'>
                    <div className="text_information">
                        <h1>Nossas informações</h1>
                    </div>
                    <ul className="itens">
                        <Item infos={hpe} />
                        <Item infos={user} />
                        <Item infos={hpe} />
                    </ul>
                </div>
                <div id="rating-main">
                    <Rating />
                </div>
            </div>
            <Rodape />
        </>
    );
}

export default Main;