import styled from "styled-components";
import {Link} from "react-router-dom";

export const NotFoundMain = styled.main``

export const NotFoundSection = styled.section`
      display: flex;
      align-items: center;
      min-height: 90vh;
      background: url("https://static.compuline.hk/images/404-bg.jpg") center center no-repeat;
      background-size: cover;
      padding: 0;
      
      .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
`

export const NotFoundHeading = styled.h1`
        text-align: center;
`

export const NotFoundText = styled.p`
        margin: 0 auto;
`

export const LinkToMain = styled(Link)`  
            text-decoration: none;
            display: flex;
            margin-top: 60px;
            padding: 25px 55px;
            width: fit-content;
            justify-content: center;
            background: #ffffff;
            border-radius: 53px;
            font-family: "Geologica Medium", sans-serif;
            font-size: 18px;
            color: #0096ff;
            cursor: pointer;
            transition: all .25s;
            
             &:hover {
               color: #0076C9;
               background:  #ffffff;
             }
             
             @media (max-width: 767px) {
                margin-top: 48px;
             }
             
     
            @media (max-width: 575px) {
              width: 100%;
            }
          
`