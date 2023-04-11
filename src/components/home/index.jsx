import React from "react";
import "./home_style.js";


import { Con, Conteiner, Cosmetic, Foto_Instagram, Home1, Home2, Home3, Instagram, Instagram_foto, Main_con, Main_con1 } from "./home_style.js";
import Corusel from "./corousel/index.jsx";
import { Card } from "reactstrap";

// import cosmetic from "../../assets/cosmetic.jpg";
const Home = () => {
  return (
    <div>
      <Home1> 
        <h2>Agashi Cosmetics</h2>
        <h3>Korea cosmetic mahsulotlari</h3>
        </Home1>
      <Main_con1>
      
        <h1>Monthly Deals</h1>
        </Main_con1>
      <Main_con>
        <Conteiner>
          <Card/>
          </Conteiner>
          <Conteiner>
          <button className="con-butt">Add to card</button>
          </Conteiner>
          <Conteiner>
          <button className="con-butt">Add to card</button>
          </Conteiner>
          <Conteiner>
          <button className="con-butt">Add to card</button>
          </Conteiner>
        </Main_con>
      <Home2>
        <h4>Bestseller</h4>
        <h4>New Arrival</h4>
        <h4>Featured</h4>
        </Home2>
      <Home3>
      <Con></Con>
      <Con></Con>
      <Con></Con>
      <Con></Con>
      <Con></Con>
      <Con></Con>
      <Con></Con>
      <Con></Con>
      <Con></Con>
              </Home3>
    <Cosmetic>
        {/* <Cosmetic src={cosmetic} alt="" /> */}
        </Cosmetic>


      <Instagram>
        <h1>Instagram</h1>
       <Corusel/>
        </Instagram>
    </div>
  );
};

export default Home;
