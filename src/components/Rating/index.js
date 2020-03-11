import React from 'react';

import './style.css';

export default function Rating() {
    var x = [0, 1, 2, 3, 4, 5, 6];
    return (
        <div id="contain-rating" className={x.length}>
            {x.map(y => (
                <li className="rating" key={y}>
                    <p className="text">Hospedagem ótima, tudo bem que tem algumas caídas as vezes mas isso é normal pois nenhuma hospedagem é perfeita! Suporte éh mais ou menos pois tem os estagiarios/suportes mas quase nunca eles tem alguma informação ou acesso a algo dentro do site para ajudar e por isso sempre tendo que recorrer aos diretores! mas de resto é mto boa parabeinx</p>
                    <p className="classfic"><span className="fa fa-star checked"></span> 4.6</p>
                    <div className="dados">
                        <p className="date">22:48 - 02/02/2020</p>
                        <img src="/images/eu.jpg" alt='eu' />
                    </div>
                </li>
            ))}
        </div>
    );
}