import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Menu() {
	return (
		<>
			<div id="menu">
				<ul>
                    <Link to="/">
                        <li>
                            <div className="bar"></div>
                            Home
                        </li>
                    </Link>
                    <Link to="/shop">
                        <li>
                            <div className="bar"></div>
                            Shop
                        </li>
                    </Link>
                    <Link to="/sobre">
                        <li>
                            <div className="bar"></div>
                            Sobre
                        </li>
                    </Link>
				</ul>
                <img src="/images/pe.png" alt="menu" id="pe_menu" />
			</div>
		</>
	)
}
export default Menu;