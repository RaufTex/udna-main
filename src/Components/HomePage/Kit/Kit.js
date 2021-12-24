import React from 'react'

import './styles.css'

export const Kit = () => {
    return (
        <section className='kit'>
            <div className='content'>
            <h2>Tudo começa com o kit</h2>
            <h3>Kit de autocoleta</h3>
            <p>Para realizar qualquer teste genético, nossos
                laboratórios parceiros precisam de uma amostra 
                do seu DNA, coletado através do kit de autocoleta 
                que chega direto à sua residência.
            </p>
            </div>
            <div className='kit-app'>
                <img src="/images/marketplace.png" alt="" />
            </div>
        </section>
    )
}

export default Kit