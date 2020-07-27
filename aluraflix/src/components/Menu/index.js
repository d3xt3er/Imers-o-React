import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
import './Menu.css';
import ButtonLink from '../components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix logo"></img>
            </a>


            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;