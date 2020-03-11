import React from 'react';

import './style.css';

export default function Item({ infos }) {
    return (
        <li className="item_information">
            <div className="cima">
                <img src={infos.image} alt="imageforitem" />
            </div>
            <div className="name">{infos.name}</div>
            <div className="infos">
                <ul>
                    <li>Total GB Ram: 256</li>
                    <li>Qualidade de conexão: 10 GBps</li>
                    <li>Nucleos do processador: 4</li>
                    <li>Velocidade do processador: 2GHz</li>
                </ul>
                <button className="more">
                    Ver mais
                    </button>
            </div>
        </li>
    );
}