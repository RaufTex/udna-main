import React from 'react'

import './styles.css'

export const NewsLetter = () => {
    return (
        <section className='call-to-action'>
            <div className='content'>
            <h2>Baixe o nosso app!</h2>
            <h3>O futuro da saúde é a prevenção. <br></br>
                Faça parte dessa comunidade!</h3>
            <a target="blank" href='https://apps.apple.com/br/app/udna/id1495750541?l=en'>
                <img src="/images/apple.svg" alt="" />
            </a>
            <a target="blank" href='https://play.google.com/store/apps/details?id=com.udna.udnaapp'>
                <img src="/images/google.svg" alt="" />
            </a>
            </div>
        </section>
    )
}

export default NewsLetter