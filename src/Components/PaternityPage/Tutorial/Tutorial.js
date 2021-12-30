import React from 'react'
import { Button } from "antd";


import './styles.css'

export const Tutorial = () => {
    return (
        <>
        <div className='preview-youtube'>
        <div className='img-preview-youtube'>
        <iframe className='youtube-iframe' width="560" height="315" src="https://www.youtube.com/embed/MF4bjIfo598" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className='content-preview'>
            <h3>ASSISTA NOSSO VÍDEO</h3>
            <h2>Como posso coletar minha saliva?</h2>
            <p>Com o kit de autocoleta, você pode realizar
                um teste genético sem sair de casa, fazendo
                a coleta da saliva e enviando o material coletado
                para ser analisado para o nosso laboratório parceiro!
            </p>
            <Button className='button-preview-youtube'><a href="http://onelink.to/n6kdvt" target="_blank">Baixe nosso app</a></Button>
        </div>
        </div>
        </>
    )
}

export default Tutorial