import React from "react";

import "./styles.css";

export const BannerInitial = () => {
  return (
    <section className="banner-initial">
      <div className="content">
        <h1>O primeiro aplicativo de genética do Brasil</h1>
        <p>Descubra os segredos do seu DNA e tenha controle da sua saúde</p>
        <a
          target="blank"
          href="https://apps.apple.com/br/app/udna/id1495750541?l=en"
        >
          <img className="apple" src="/images/apple.svg" alt="" />
        </a>
        <a
          target="blank"
          href="https://play.google.com/store/apps/details?id=com.udna.udnaapp"
        >
          <img className="google" src="/images/google.svg" alt="" />
        </a>
        
      </div>
      <div className="img-background">
        <img src="/images/banner.svg" alt="" />
      </div>
    </section>
  );
};

export default BannerInitial;
