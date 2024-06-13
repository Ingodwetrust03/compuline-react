import styled from 'styled-components';
import {Link} from "react-router-dom";


export const BannerLink = styled(Link)<{$color: string}>`
    text-decoration: none;
    display: flex;
    padding: 25px 55px;
    width: fit-content;
    justify-content: center;
    background: ${({$color}) => $color === "white" ? "#ffffff" : "#0096ff"};
    border-radius: 53px;
    font-family: "Geologica Medium", sans-serif;
    font-size: 18px;
    color: ${({$color}) => $color === "white" ? "#0096ff" : "#ffffff"};
    cursor: pointer;
    transition: all .25s;
    
     &:hover {
       color: ${({$color}) => $color === "white" ? "#0076C9" : "#ffffff"};
       background:  ${({$color}) => $color === "white" ? "#ffffff" : "#0076C9"};
     }
     
     
    @media (max-width: 575px) {
      width: 100%;
    }
`