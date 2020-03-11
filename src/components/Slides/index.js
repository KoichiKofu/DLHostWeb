import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import api from '../../services/api.js';
import TransformFromGBinMachines from '../../utils/functions';

import './style.css';
import './script.js';

export default function Slides() {
    const [plans, setPlans] = useState([]);
    const [te, setTe] = useState(false);
    const { state } = useParams();

    useEffect(() => {
        async function teste() {
            setTe(false);
            const state_infos = await api.get('/state?name='+state);
            const planos = await api.get("/product?id="+state_infos.data.id);

            if(planos.data.length === 0) return;
            setTe(true);
            setPlans(planos.data);
        }
        teste();
    }, [state]);
    return (
        <div id="plans">
            <div id="apoint-left" style={te ? { display: 'block' } : { display: 'none' }} className="apoint"><img src="/arrow.png" alt="arrow" /></div>
            <div id="apoint-right" style={te ? { display: 'block' } : { display: 'none' }} className="apoint"><img src="/arrow.png" alt="arrow" /></div>
            <div id="container_plans">
                {te ? plans.map(li => (
                    <li className="pl" key={li.memory}>
                        <div className="up">
                            <div className="title_product">
                                <h1>
                                    Minecraft {li.memory}GB
                                </h1>
                            </div>
                            <div id="machines_back">
                                <div className="machines">
                                    {TransformFromGBinMachines(li.memory)}
                                </div>
                            </div>
                        </div>
                        <div className="down">
                            <div className="listing">
                                <ul>
                                    <li>Players <strong>unlimited</strong></li>
                                    <li>Banco de dados <strong>MySQL</strong></li>
                                    <li>Painel de controle <strong>Pterodactyl</strong></li>
                                    <li>DNS dinâmico <strong>gratuito</strong></li>
                                </ul>
                                <div className="pricing">
                                    RS {li.price},00
                                </div>
                            </div>
                            <center><button className="buy">Comprar</button></center>
                        </div>
                    </li>
                )) : <center><lottie-player src="https://assets9.lottiefiles.com/temp/lf20_tGD9tP.json"  background="transparent"  speed="0.7"  id="teste_loop"  loop autoplay ></lottie-player></center>}
            </div>
        </div>
    );
}