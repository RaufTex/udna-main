import React from 'react'
import { Row, Col } from "antd";


import './styles.css'

export const StepsTwo = () => {
    return (
        <>
        <div className='steps-two'>
            <Row className='steps-two-coluns'>
                <Col className='steps-two-coluns4'>
                <h2>04</h2>
                <img src="/images/correio.svg" alt="" />
                <p>Faça a coleta da saliva<br></br> dos envolvidos.<br></br> É fácil, seguro e<br></br> indolor!</p>
                </Col>
                <Col className='steps-two-coluns5'>
                <h2>05</h2>
                <img src="/images/resultado.svg" alt="" />
                <p>Escolha e compre o teste<br></br> genético através do nosso<br></br> aplicativo ou site.</p>
                </Col>
            </Row>
            </div>
            </>
    )
}

export default StepsTwo