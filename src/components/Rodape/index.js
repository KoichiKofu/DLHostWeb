import React from 'react';
import './style.css';

function Rodape() {
	return (
		<div id="rodape">
            <img src="/images/pe.png" alt="rodape" id="pe" />
            <div id="telefones">
                <h1>Contatos</h1>
                <p>+55 17 98808-5830<br/>+55 17 99123-0351</p>
            </div>
            <div id="imagem">
			    <img src="/logo.png" alt="logo" />
            </div>
            <div id="linha"></div>
            <div id="redes_sociais">
                <a href="https://discord.gg/pw8GQgY" target="_blank" rel="noopener noreferrer">
                    <div>
                        <img src="/images/discord.png" alt="discord" />
                    </div>
                </a>
            </div>
            <p id="credits">
                © 2020 DLHost - Todos os direitos reservados.
            </p>
		</div>
	);
}

export default Rodape;