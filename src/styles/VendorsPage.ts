import styled from "styled-components";

export const VendorsMain = styled.main``

export const VendorsBanner = styled.section`
        display: flex;
        align-items: center;
        width: 100%;
        background: linear-gradient(to bottom,  rgba(38,44,58,1) 1%,rgba(38,44,58,1) 70%,rgba(255,255,255,1) 70%,rgba(255,255,255,1) 100%);
        padding: 58px 0 0 0;
        
        @media (max-width: 1200px) {
            padding: 20px 0 0 0;
        }

        @media (max-width: 991px) {
            background: linear-gradient(to bottom,  rgba(38,44,58,1) 1%,rgba(38,44,58,1) 85%,rgba(255,255,255,1) 85%,rgba(255,255,255,1) 100%);
        }

        @media (max-width: 767px) {
            padding: 0;
        }
`

export const VendorsHeading = styled.h1`
        padding-top: 80px;
        
         @media (max-width: 1200px) {
            padding-top: 30px;
          }
          @media (max-width: 767px) {
            padding-top: 100px;
          }
`

export const VendorsBannerText = styled.p`
            padding: 0;
            
            @media (max-width: 767px) {
              margin: 28px 0 35px
            }
            
            br {
              @media (max-width: 1200px) {
               display: none;
              }
            }
`

export const VendorsSection = styled.section`
            p {
                padding-top: 155px;

                @media (max-width: 1100px) {
                    padding: 75px 0 40px 0;
                }
                
                @media (max-width: 767px) {
                    padding: 0 0 40px 0;
                }
            }
`