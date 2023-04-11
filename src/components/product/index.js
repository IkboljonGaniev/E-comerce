import React from "react";
import "./product.css";
import manyo from "../../assets/manyo.jpg";
import yurak from "../../assets/yurak.png";
const Product = () => {
  return (
    <div className="body-product">
      <div className="nav-prod">
        <div className="product-nav">
          <div className="name-prod">
            <div className="name-left">
              <h5>Manyo tozalovchi moy</h5>
            </div>
            <div className="name-right">
              <img className="yurak" src={yurak} />
            </div>
          </div>
          <div className="photo-rec">
            <img className="re-comend" src={manyo} />
          </div>
        </div>
        <div className="product-nav1">
          <div className="prod1">
            Manyo tozalovchi moy tabiiy koreys kosmetikasi brendidan Manyo
            Factory kosmetika qoldiqlarini mukammal darajada tozalaydi va teriga
            yumshoq g'amxo'rlik qiluvchi oziqlantiruvchi kompleksga ega. ✔️
            Yog'li tiqinlarni va hatto eng chidamli kosmetika vositalarini ham
            eritib yuboradi. ✔️Ajoyib namlaydi, toksinlarni olib tashlaydi va
            mukammal yallig'lanishga qarshi xususiyatlarga ega!
          </div>
        </div>
      </div>
      <div className="recomends">
        <div className="recomend"></div>
        <div className="recomend"></div>
        <div className="recomend"></div>
        <div className="recomend"></div>
        <div className="recomend"></div>
        <div className="recomend"></div>
        <div className="recomend"></div>
        <div className="recomend"></div>
        <div className="recomend"></div>
        <div className="recomend"></div>
        <div className="recomend"></div>
        <div className="recomend"></div>
      </div>
    </div>
  );
};

export default Product;
