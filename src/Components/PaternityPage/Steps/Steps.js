import React from 'react'
import { Row, Col } from "antd";


import './styles.css'

export const Steps = () => {
    return (
        <>
        <div className='steps'>
            <div className='title-steps'>
                <h2>PASSO A PASSO</h2>
                <p>Como funciona a coleta de saliva?</p>
            </div> 
            <Row className='steps-coluns'>
                <Col>
                    <h2>01</h2>
                    <img src="/images/kit.svg" alt="" />
                    <p>Compre nosso kit de autocoleta e<br></br> receba no endereço de sua<br></br> escolha.</p>
                </Col>
                <Col>
                    <h2>02</h2>
                    <img src="/images/test.svg" alt="" />
                    <p>Faça a coleta da saliva<br></br> dos envolvidos.<br></br> É fácil, seguro e<br></br> indolor!</p>
                </Col>
                <Col>
                    <h2>03</h2>
                    <img src="/images/saliva.svg" alt="" />
                    <p>Escolha e compre o teste<br></br> genético através do nosso<br></br> aplicativo ou site.</p>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default Steps