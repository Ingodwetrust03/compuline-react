import styled from 'styled-components';
import {Link} from "react-router-dom";

export const LinkBlock = styled(Link)`
    text-decoration: none;
    display: flex;
    padding: 25px 55px;
    margin-top: 60px;
    width: fit-content;
    justify-content: center;
    background: #0096ff;
    border-radius: 53px;
    font-family: "Geologica Medium", sans-serif;
    font-size: 18px;
    color: #ffffff;
    transition: all .25s;
    
     &:hover {
       color: #ffffff;
       background:  #0076C9;
     }
     
     @media (max-width: 767px) {
        margin-top: 45px;
      }
      
    @media (max-width: 575px) {
      width: 100%;
    }
`