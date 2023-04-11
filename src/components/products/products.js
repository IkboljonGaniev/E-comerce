import styled from "styled-components";

export const Home = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  color: white;
  height: 400px;
  background: linear-gradient(180deg, #0575e6 0%, #02298a 84.79%, #021b79 100%);
  box-shadow: 0px 13px 41px rgba(38, 111, 197, 0.25);
`;
export const Mahsulot = styled.div`
  display: grid;
  grid-template-areas: "a a a";
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 80px;
  background-color: red;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 30px;
    background: #0575e6;
    border-radius: 30px;
    color: whitesmoke;
    cursor: pointer;
  }
`;

export const Mahsulotlar = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid black;
  height: 414px;
  width: 322px;
`;

export const Manyo = styled.img`
  width: 322px;
  height: 282px;
`;
