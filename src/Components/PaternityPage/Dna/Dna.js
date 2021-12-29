import React from "react";
import Header from "../../Header/Header";
import "./styles.css";

export const Dna = () => {
  return (
    <section className="dna-paternity">
      {/* <Header/> */}
      {/* <div className="imagens">
        
      </div> */}
      <div style={{width: '100%', height: '100vh'}}><img className="father" src="/images/vetor_pai.svg" alt="" /></div>
     
        {/* <div className="imagens">
          <img className="father" src="/images/vetor_pai.svg" alt="" />
        </div> */}
        <div className="content-dna-paternity">
          <h2>Teste de DNA</h2>
          <h4>Paternidade e Familiar</h4>
          <h3>Faça o seu teste de DNA através da saliva sem sair de casa!</h3>
          <div className="images-dna-paternity">
            <a
              target="blank"
              href="https://apps.apple.com/br/app/udna/id1495750541?l=en"
            >
              <img src="/images/apple.svg" alt="" />
            </a>
            <a
              target="blank"
              href="https://play.google.com/store/apps/details?id=com.udna.udnaapp"
            >
              <img src="/images/google.svg" alt="" />
            </a>
          </div>
        </div>
   
      <div style={{width: '100%', height: '100vh'}}><img className="mommy" src="/images/vetor_mae.svg" alt="" /></div>
      {/* <div className="imagens">
        <img className="mommy" src="/images/vetor_mae.svg" alt="" />
      </div> */}
    </section>
  );
};

export default Dna;
