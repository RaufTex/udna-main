import React from 'react'
import { Button, Card, Row } from "antd";
import { CheckCircleFilled } from '@ant-design/icons';


import './styles.css'

export const Plans = () => {
    return (
        <>
        <div className='plans'>
        <div className='title-plans'>
            <h3>FAÇA SUA COMPRA</h3>
            <h2>Escolha o melhor teste pra você!</h2>
        </div>
        <div>
            <Row>
            <Card className='card-plans'>
                <div className='body-card'>
                <h3>Paternidade</h3>
                <p><CheckCircleFilled /> Kit de autocoleta</p>
                <p><CheckCircleFilled /> Frete grátis</p>
                <p><CheckCircleFilled /> Resultado em 7 dias</p>
                <p><CheckCircleFilled /> Atendimento personalizado</p>
                <h2>R$ 385,90</h2>
                <div className='button-card-plans'>
                <Button className='button-plans'>Comprar</Button>
                </div>
                </div>
            </Card>
            <Card className='card-plans'>
                <div className='body-card'>
                <h3>Maternidade</h3>
                <p><CheckCircleFilled /> Kit de autocoleta</p>
                <p><CheckCircleFilled /> Frete grátis</p>
                <p><CheckCircleFilled /> Resultado em 7 dias</p>
                <p><CheckCircleFilled /> Atendimento personalizado</p>
                <h2>R$ 385,90</h2>
                <div className='button-card-plans'>
                <Button className='button-plans'>Comprar</Button>
                </div>
                </div>
            </Card>
            <Card className='card-plans'>
                <div className='body-card'>
                <h3>Reconstrução familiar</h3>
                <p><CheckCircleFilled /> Kit de autocoleta</p>
                <p><CheckCircleFilled /> Frete grátis</p>
                <p><CheckCircleFilled /> Resultado em 7 dias</p>
                <p><CheckCircleFilled /> Atendimento personalizado</p>
                <p style={{textAlign: 'center' }}>Faça contato pelo WhatsApp</p>
                <h2>R$ 1.467,00</h2>
                <div className='button-card-plans'>
                <Button className='button-plans'>Comprar</Button>
                </div>
                </div>
            </Card>
            </Row>
        </div>
        </div>
        </>
    )
}

export default Plans