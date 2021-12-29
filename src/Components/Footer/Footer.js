import React from 'react'

import './styles.css'

export const Footer = () => {
    return (
        <section className='footer'>
            <div className='logo-and-icons'>
            <div className='logo'>
                <a href='/'><img src="/images/uDNA_logo_extenso_roxo.png" alt="" /></a>
            </div>
            <div>
                <ul className='icons'>
                    <li><a target="blank" href='https://www.instagram.com/udnabrasil/'><img src="/images/instagram.svg" alt="" /></a></li>
                    <li><a target="blank" href='https://pt-br.facebook.com/udnabrasil/'><img src="/images/facebook.svg" alt="" /></a></li>
                    {/* <li><a target="blank" href=''><img src="/images/whatsapp.svg" alt="" /></a></li> */}
                    <li><a target="blank" href='https://twitter.com/udnabrasil'><img src="/images/twitter.svg" alt="" /></a></li>
                    <li><a target="blank" href='https://br.linkedin.com/company/udna'><img src="/images/linkedin.svg" alt="" /></a></li>
                    <li><a target="blank" href='https://www.youtube.com/channel/UCQDYLfZ8zZGXHFwNEuFUbGQ'><img src="/images/youtube.svg" alt="" /></a></li>
                </ul>
            </div>
            </div>
            <p>© 2021 uDNA Diagnostica e Tecnologia LTDA - Todos os direitos reservados. Poítica de Privacidade - CNPJ nº 37.315.024/0001-40</p>
        </section>
    )
}

export default Footer