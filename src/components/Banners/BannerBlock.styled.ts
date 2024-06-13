import styled from 'styled-components';

export const BannerSection = styled.section<{$background:string, $mobile:string}>`
    display: flex;
    align-items: center;
    height: 800px;
    background: url(${({$background}) => $background}) center center no-repeat;
    background-size: cover;

      @media (max-width: 767px) {
        height: 740px;
        background: url(${({$mobile}) => $mobile}) center center no-repeat;
        background-size: cover;
        align-items: flex-start;
        padding-top: 125px;
       }
`

export const BannerTextBlock = styled.p`
    margin: 30px 0 60px;
    font-size: 18px;
    color: #ffffff;
`