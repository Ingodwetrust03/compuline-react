import styled from 'styled-components';

export const HeaderBlock = styled.header`
    padding: 25px 0;
`

export const HeaderNavigation = styled.nav``

export const HeaderMobileNavigationIcon = styled.div`
    z-index: 5;
    width: 35px;
    height: 35px;
    border:solid 1px #fff;
    border-radius: 50%;
    padding: 7px 4px;
    
    span {
       width: 20px;
       height: 1px;
       background-color: #fff;
       display: block;
       margin: 5px auto;
       transition: all 0.3s ease-in-out;
    }

    &.active {
        border: none;
        
        span {
            &:first-child {
                transform: translateY(3px) rotate(45deg);
            }
            &:last-child {
                transform: translateY(-3px) rotate(-45deg);
            }
        }
    }
       
`

export const HeaderMenu = styled.ul`
     @media (max-width: 991px) {
          width: 75%;
        }
        @media (max-width: 767px) {
          position: absolute;
          width: 100vw;
          min-height: 100vh;
          height: fit-content;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 60px;
          padding: 148px 22%;
          background: #262C3A;
          top: 0;
          left: -999px;
          z-index: 2;
          transition: left .5s;
              &.open {
                left: 0;
              }
        }
`
