import React from "react";
import "./about.css";
import foto1 from "../../assets/foto1.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.jpg";
import foto4 from "../../assets/foto4.jpg";
const About = () => {
  return (
    <div>
      <div className="about-us">
        <h1 className="about-us1">Biz haqimizda</h1>
        <h2>
          Koreaning mashhur brendlari arzon narxlarda, O'zbekiston
          bozorida-faqat bizning ishonchli dillerlar orqali sotib olishingiz
          mumkin!
        </h2>
      </div>
      <div className="mission">
        <div className="mission1">
          <img src={foto1} />
        </div>
        <div className="mission2">Bizning maqsadimiz</div>
      </div>
      <div className="mission">
        <div className="mission1">Hizmat sifatlari</div>
        <div className="mission2">
          <img src={foto2} />
        </div>
      </div>
      <div className="bg-foto">
        <h2 className="vision">Kompaniyaning qarashlari</h2>
      </div>
      <div className="founders">
        <h1>Tashkilotchilar</h1>
      </div>
      <div className="mission">
        <div className="mission1">
          <img src={foto3} />
        </div>
        <div className="mission2">Bizning maqsadimiz</div>
      </div>
      <div className="mission">
        <div className="mission1">Hizmat sifatlari</div>
        <div className="mission2">
          <img src={foto4} />
        </div>
      </div>
    </div>
  );
};

export default About;
