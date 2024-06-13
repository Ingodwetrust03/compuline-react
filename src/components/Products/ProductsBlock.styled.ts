import styled from 'styled-components';


export const ProductItem = styled.div<{$background: string}>`
    width: 100%;
    height: 425px;
    margin-bottom: 24px;
    border-radius: 15px;
    background: url(${({$background}) => $background}) center center no-repeat;
    background-size: cover;
    
    @media (max-width: 991px) {
         height: 350px;
     }

     @media (max-width: 575px) {
         height: 205px;
         margin-bottom: 12px;
     }
`

export const ProductHeading = styled.small`
    display: block;
    margin-bottom: 50px;

    @media (max-width: 575px) {
        margin-bottom: 32px;
    }
`
