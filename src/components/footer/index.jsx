import React from "react";
import "./footer.js";
import visa from "../../assets/visa.png";
import master from "../../assets/master.png";
import uzcard from "../../assets/uzcard.png";
import humo from "../../assets/humo.png";
import oson from "../../assets/oson.png";
import click from "../../assets/click.png";
import pay from "../../assets/pay.png";
import uzum from "../../assets/uzum.png";
import { Copyright, Fon, Fooot_con, Fooot_con1, Foto_payments } from "./footer.js";
const Footer = () => {
  return (
    <div>
    <Fon>
      <Fooot_con1>
        <Fooot_con>
          <Foto_payments src={visa} />
          </Fooot_con>
          <Fooot_con>
          <Foto_payments src={master} />
          </Fooot_con>
          <Fooot_con>
          <Foto_payments src={uzcard} />
          </Fooot_con>
          <Fooot_con>
          <Foto_payments src={uzum} />
          </Fooot_con>
          <Fooot_con>
          <Foto_payments src={oson} />
          </Fooot_con>
          <Fooot_con>
          <Foto_payments src={click} />
          </Fooot_con>
          <Fooot_con>
          <Foto_payments src={pay} />
          </Fooot_con>
          <Fooot_con>
          <Foto_payments src={humo} />
          </Fooot_con>
               </Fooot_con1>

      <Copyright>Copyright © 2021</Copyright>
      
      </Fon>
      </div>
  );
};

export default Footer;
