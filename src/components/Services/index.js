import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import './style.css';

export default function Services() {
    const [locais, setLocais] = useState([]);
    // const navigate = useNavigate();
    async function getInfos() {
        const loc = await api.get("/state");
        setLocais(loc.data);
    }
    useEffect(() => {
        getInfos();
    }, []);
    return (
        <>
            {locais.map(item => (
                <Link to={"/shop/"+item.path.toLowerCase()} key={item.path.toLowerCase()}>
                    <li className="plan">
                        <img src={item.image} alt={item.path.toLowerCase()} />
                        <div className="plan_content">
                            <strong>{item.name}</strong>
                            <br />
                            <p>{item.description}</p>
                        </div>
                    </li>
                </Link>
            ))}
        </>
    );
}