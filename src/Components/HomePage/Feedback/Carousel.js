import React from "react";
import { StarFilled } from "@ant-design/icons";
import { Carousel, Card } from "antd";
import "./styles.css";

export const Testemunhals = () => {
  var settings = {
    dots: false,
    slidesPerRow: 4,

    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 2,
          slidesToScroll: 4,
          //infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
          //initialSlide: 2
        },
      },
      /* {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      } */
    ],
  };
  return (
    <>
      <Carousel {...settings}>
        <div className="App">
          <Card className="color-card" title="Gabriel Santos" bordered={false}>
            <div className="star-icon">
              <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled />{" "}
              <StarFilled />
              <br></br>
            </div>
            O exame de performance esportiva me permitiu descobrir mais sobre o
            funcionamento do meu corpo e minhas capacidades. Equipe preparada e
            trabalho excelente!
          </Card>
        </div>
        <div className="App">
          <Card className="color-card" title="Márcia Souza" bordered={false}>
            <div className="star-icon">
              <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled />{" "}
              <StarFilled />
              <br></br>
            </div>
            A uDNA tem um atendimento incrível! Com o teste de Nutrigenética,
            passei a conhecer muito mais sobre minha saúde e pude atingir
            resultados que nunca consegui antes!
          </Card>
        </div>
        <div className="App">
          <Card className="color-card" title="Matheus Barros" bordered={false}>
            <div className="star-icon">
              <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled />{" "}
              <StarFilled />
              <br></br>
            </div>
            Trabalho impecável. Eu precisei de um teste de DNA em um momento
            muito delicado da minha vida. Eles foram super atenciosos e
            encontraram a solução de um problema que eu buscava há anos.
          </Card>
        </div>
      </Carousel>
    </>
  );
};

export default Testemunhals;

/* import { Card } from 'antd'
import { StarFilled } from '@ant-design/icons';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'
import { useWindowDimensions } from 'react-native'
import './styles.css';


export const Testemunhals = () => {
  const { width } = useWindowDimensions();

  const renderSlides = () =>
    [
      <Card className='color-card' title="Gabriel Santos" bordered={false}>
        <div className='star-icon'>
        <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled /><br></br>
        </div>
        O exame de performance esportiva me permitiu descobrir mais sobre o
        funcionamento do meu corpo e minhas capacidades. Equipe preparada e
        trabalho excelente!
      </Card>,
      <Card className='color-card' title="Márcia Souza" bordered={false}>
        <div className='star-icon'>
        <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled /><br></br>
        </div>
        A uDNA tem um atendimento incrível! Com o teste de Nutrigenética,
        passei a conhecer muito mais sobre minha saúde e pude atingir
        resultados que nunca consegui antes!
      </Card>, 
      <Card className='color-card' title="Matheus Barros" bordered={false}>
        <div className='star-icon'>
        <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled /><br></br>
        </div>
        Trabalho impecável. Eu precisei de um teste de DNA em um momento
        muito delicado da minha vida. Eles foram super atenciosos e
        encontraram a solução de um problema que eu buscava há anos.
        </Card>,
    ].map((num) => (
      <div>
        <h3>{num}</h3>
      </div>
    ));

  return (
    <div className="App">
      <Slider
        dots={false}
        slidesToShow={width <= 600 ? 1 : 3}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}

export default Testemunhals */
