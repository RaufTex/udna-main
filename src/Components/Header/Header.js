import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export const Header = () => {

    return (
        <header class="header">
            <a className='logo' href='/'><img src="/images/uDNA_logo.svg" alt="" /></a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <ul class="menu">
                {/* <li><a>Sobre a uDNA</a></li> */}
                <li><Link to="/paternidade">Paternidade</Link></li>
                <li><a href="https://udnahelp.zendesk.com/hc/pt-br" rel="noreferrer">Dúvidas frequentes</a></li>
                <li><a href="https://api.whatsapp.com/send?phone=5527992765065&text=Queria%20uma%20ajuda.%20Poderia%20me%20dar%20um%20suporte" rel="noreferrer">Contato</a></li>
            </ul>
        </header>
    )
}

export default Header