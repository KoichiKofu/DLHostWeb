import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Main from './pages/Main/';
import Shop from './pages/Shop/';
import Sobre from './pages/Sobre/';

function Teste() {
    let navigate = useNavigate();
    navigate("/shop/canada");
    return <h1>Teste</h1>;
}

export default function MainRoutes() {
	return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/shop" element={<Teste />} />
            <Route path="/shop/:state" element={<Shop />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
	);
}