import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav_bar = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  display: flex;

  height: 70px;
  background: linear-gradient(180deg, #0575e6 0%, #02298a 84.79%, #021b79 100%);
`;
export const Navlog = styled.img`
  height: 70px;
  width: 70px;
`;
export const Nav_left = styled.div`
  flex: 1;
`;
export const Nav_right = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  button {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    background-color: rgba(4, 17, 42, 0.367);
    cursor: pointer;
    border: none;
    border-radius: 15px;
    height: 25px;
    width: 70px;
    box-shadow: 0px 13px 41px rgba(79, 204, 215, 0.004);
    :hover {
      background-color: #35b519;
      color: white;
      font-size: 17px;
      text-decoration: none;
    }
  }
`;
export const Navlink = styled(Link)`
  text-decoration: none;
`;
