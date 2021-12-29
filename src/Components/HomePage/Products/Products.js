import React from 'react'
import CardsProducts from './CardsProducts'

import './styles.css'

export const Products = () => {
    return (
        <section className='products'>
            
            <div className='content-products'>
            <h2>Nossos produtos</h2>
            <p className='sub-title'>Diversos testes em um só local</p>
            <CardsProducts />
            </div>
        </section>
    )
}

export default Products