import styled from 'styled-components';
import {Link} from "react-router-dom";

export const LinkBlock = styled(Link)`
      display: flex;
      align-items: center;
      margin-top: 32px;
      gap: 8px;
      color: #8AA4B0;
      font-family: "Geologica Light", sans-serif;
      font-size: 18px;
      transition: color .25s;
      &:hover {
        color: #0096FF;
      }
      &:after {
        content: '';
        display: flex;
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        background: url("https://static.compuline.hk/images/blue-link.svg") center center no-repeat;
        background-size: cover;
        border-radius: 50%;
      }
      @media (max-width: 575px) {
        width: 100%;
      }
`