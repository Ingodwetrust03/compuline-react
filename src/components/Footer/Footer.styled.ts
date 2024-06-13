import styled from 'styled-components';

export const FooterBlock = styled.footer`
    padding: 50px 0 40px 0;
`

export const FooterNavigation = styled.nav`
    @media (max-width: 991px) {
        align-items: flex-start;
     }
`

export const FooterMenu = styled.ul`
     @media (max-width: 991px) {
          width: 100%;
          margin-top: 50px;
          flex-wrap: wrap;
        }
        @media (max-width: 575px) {
          flex-direction: column;
          align-items: flex-start;
        }
`

export const FooterCopyright = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 85px;
    color: #8AA4B0;
    opacity: .6;
    width: 100%;
    border-top: solid 1px rgba(138, 164, 176, .3);
    padding-top: 30px;
    font-size: 18px;
    
    @media (max-width: 991px) {
        margin-top: 38px;
    }
    
    @media (max-width: 575px) {
        justify-content: flex-start;
    }
`


