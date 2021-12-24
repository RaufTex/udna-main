import React from 'react'

import './styles.css'

export const DnaTest = () => {
    return (
        <section className='dna-test'>
            <div className='content'>
            <h2>Compre seu teste de DNA</h2>
            <h3>Escolha do teste</h3>
            <p>Ao receber o kit e coletar a sua amostra de saliva,
                é só escolher qual teste deseja realizar na nossa loja
                e enviar o kit para o laboratório parceiro.
                O resultado vai chegar direto no nosso app!
            </p>
            </div>
            <div className='dna-test-app'>
                <img src="/images/subcategoria.png" alt="" />
            </div>
        </section>
    )
}

export default DnaTest