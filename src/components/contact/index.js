import React from "react";
import "./contact.css";
import foto5 from "../../assets/foto5.png";
const Contact = () => {
  return (
    <div className="about">
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
          <img src={foto5} />
        </div>
        <div className="mission2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  );
};

export default Contact;
