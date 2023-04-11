import React from "react";

import manyo from "../../assets/manyo.jpg";
import toner from "../../assets/toner.jpg";
import "./products.js";
import { Home, Mahsulot, Mahsulotlar, Manyo } from "./products.js";
const Products = () => {
  return (
    <div>
      <Home>
        <h2>Mahsulot turlari</h2>
        <h3>Korea cosmetic mahsulotlari</h3>
        </Home>
      <Mahsulot>
        <Mahsulotlar>
          <Manyo src={manyo} />
          <h5>Manyo tozalovchi moy</h5>
          <p>225.000 so'm</p>
          <button>Mahsulot haqida batafsil</button>
          </Mahsulotlar>
          <Mahsulotlar>
          <Manyo src={toner} />
          <h5>Manyo tozalovchi moy</h5>
          <p>225.000 so'm</p>
          <button className="but-prod">Mahsulot haqida batafsil</button>
          </Mahsulotlar>
          <Mahsulotlar>
          <button className="but-prod">Mahsulot haqida batafsil</button>
          </Mahsulotlar>
          <Mahsulotlar>
          <button className="but-prod">Mahsulot haqida batafsil</button>
          </Mahsulotlar>
          <Mahsulotlar>
          <button className="but-prod">Mahsulot haqida batafsil</button>
          </Mahsulotlar>
          <Mahsulotlar>
          <button className="but-prod">Mahsulot haqida batafsil</button>
          </Mahsulotlar>
          <Mahsulotlar>
          <button className="but-prod">Mahsulot haqida batafsil</button>
          </Mahsulotlar>
          <Mahsulotlar>
          <button className="but-prod">Mahsulot haqida batafsil</button>
          </Mahsulotlar>
          <Mahsulotlar>
          <button className="but-prod">Mahsulot haqida batafsil</button>
          </Mahsulotlar>
          <Mahsulotlar>
          <button className="but-prod">Mahsulot haqida batafsil</button>
          </Mahsulotlar>
          <Mahsulotlar>
          <button className="but-prod">Mahsulot haqida batafsil</button>
          </Mahsulotlar>
          <Mahsulotlar>
          <button className="but-prod">Mahsulot haqida batafsil</button>
          </Mahsulotlar>
          <Mahsulotlar>
          <button className="but-prod">Mahsulot haqida batafsil</button>
          </Mahsulotlar>
          <Mahsulotlar>
          <button className="but-prod">Mahsulot haqida batafsil</button>
          </Mahsulotlar>
          <Mahsulotlar>
          <button className="but-prod">Mahsulot haqida batafsil</button>
          </Mahsulotlar>
          <Mahsulotlar>
          <button className="but-prod">Mahsulot haqida batafsil</button>
          </Mahsulotlar>
          <Mahsulotlar>
          <button className="but-prod">Mahsulot haqida batafsil</button>
          </Mahsulotlar>
          <Mahsulotlar>
          <button className="but-prod">Mahsulot haqida batafsil</button>
          </Mahsulotlar>
        </Mahsulot>
    </div>
  );
};

export default Products;
