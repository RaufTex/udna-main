import React from "react";
import { Carousel, Card } from "antd";

export const CardsProducts = () => {
  var settings = {
    dots: true,
    slidesPerRow: 3,
     /* centerMode: true,  */
    
 
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          //slidesToShow: 2,
          slidesPerRow: 2,
         
        
      
        }
      },
      {
        breakpoint: 830,
        settings: {
          //slidesToShow: 1,
          slidesPerRow: 1,
        
          //initialSlide: 2
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesPerRow: 1,
          initialSlide: 0
        
        }
      } 
    ]
  };
  return (
    <>
      <Carousel  {...settings}>
        <div className="card">
        <Card className="card-products">
              <img src="/images/cancer.svg" alt="" />
              <h4>Câncer Hereditário</h4>
              <p className="description">
                Painel que analisa os principais marcadores genéticos de câncer
                hereditário e entre outros.
              </p>
            </Card>
        </div>
        <div className="card">
        <Card className="card-products">
              <img src="/images/nutrition.svg" alt="" />
              <h4>Nutrição Profissional</h4>
              <p className="description">
                Descubra suas necessidades de vitaminas, hábitos que
                potencializam o bem estar, sensibilidades.
              </p>
            </Card>
        </div>
        <div className="card">
        <Card className="card-products">
              <img src="/images/persona-fitness.svg" alt="" />
              <h4>Personna Fitness</h4>
              <p className="description">
                Avalia a sua propensão ao acúmulo de gordura, estrutura muscular
                e resposta ao exercício físico.
              </p>
            </Card>
        </div>
        <div className="card">
        <Card className="card-products">
              <img src="/images/paternity.svg" alt="" />
              <h4>Paternidade</h4>
              <p className="description">
                Análise do vínculo de parentesco entre suposto pai e filho(a). O
                teste de paternidade da uDNA é feito com saliva.
              </p>
            </Card>
        </div>
        {/* <div>
          <Row className="card">
            <Card className="card-products">
              <img src="/images/cancer.svg" alt="" />
              <h4>Câncer Hereditário</h4>
              <p className="description">
                Painel que analisa os principais marcadores genéticos de câncer
                hereditário e entre outros.
              </p>
            </Card>
            <Card className="card-products">
              <img src="/images/nutrition.svg" alt="" />
              <h4>Nutrição Profissional</h4>
              <p className="description">
                Descubra suas necessidades de vitaminas, hábitos que
                potencializam o bem estar, sensibilidades.
              </p>
            </Card>
            <Card className="card-products">
              <img src="/images/persona-fitness.svg" alt="" />
              <h4>Personna Fitness</h4>
              <p className="description">
                Avalia a sua propensão ao acúmulo de gordura, estrutura muscular
                e resposta ao exercício físico.
              </p>
            </Card>
            <Card className="card-products">
              <img src="/images/paternity.svg" alt="" />
              <h4>Paternidade</h4>
              <p className="description">
                Análise do vínculo de parentesco entre suposto pai e filho(a). O
                teste de paternidade da uDNA é feito com saliva.
              </p>
            </Card>
          </Row>
        </div> */}
      </Carousel>
    </>
  );
};

export default CardsProducts;
