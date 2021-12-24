import React from 'react'
import 'antd/dist/antd.css'
import Testemunhals from './Carousel'

import './styles.css'

export const Feedback = () => {
    return (
        <>
        <div className='feedback'>
        <div className='title'>
            <h4>FEEDBACK</h4>
            <h2>O que dizem da uDNA</h2>
        </div>
        <div>
            <Testemunhals />
        </div>
        </div>
      </>
    )
}

export default Feedback