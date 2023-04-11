import styled from "styled-components";
import cosmetic from "../../assets/cosmetic.jpg";
export const Home1 = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  color: white;
  height: 400px;
  background: linear-gradient(180deg, #0575e6 0%, #02298a 84.79%, #021b79 100%);
  box-shadow: 0px 13px 41px rgba(38, 111, 197, 0.25);
`;
export const Main_con = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const Main_con1 = styled.div`
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 412px;
  width: 255px;
  background: rgba(38, 111, 197, 0.11);
  border-radius: 18px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(38, 111, 197, 0.25);
    border-radius: 20px;
    width: 158px;
    height: 39px;
    cursor: pointer;
  }
`;

export const Home2 = styled.div`
  padding-bottom: 100px;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Home3 = styled.div`
  display: grid;
  grid-template-areas: "auto auto auto";
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding-bottom: 100px;
`;
export const Con = styled.div`
  border: 1px solid black;
  height: 200px;
  width: 200px;
`;
export const Cosmetic = styled.div`
  height: 340px;
  background-image: url(${cosmetic});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid black;
  width: 100%;
`;
export const Instagram = styled.div`
  padding: 100px;
`;
// export const Instagram_foto = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// export const Foto_Instagram = styled.div`
//   border: 1px solid black;
//   height: 222px;
//   width: 222px;
// `;
