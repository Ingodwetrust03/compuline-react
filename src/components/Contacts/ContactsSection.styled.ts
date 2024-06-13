import styled from 'styled-components';

export const ContactsMain = styled.main``

export const ContactsWrapper = styled.div`
      padding: 0 0 140px 0;
      display: flex;
      align-items: center;
      width: 100%;
      background: linear-gradient(to bottom, rgba(38, 44, 58, 1) 1%, rgba(38, 44, 58, 1) 50%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%);
`

export const ContactsInnerWrapper = styled.div`
        max-width: 1920px;
        width: 100%;
        margin: 0 auto;
`

export const ContactsContentWrapper = styled.div`
         padding-top: 140px;
         margin-left: calc((100% - 1280px) / 2);
         height: 100%;
         
          @media (max-width: 1340px) {
            margin-left: 2.5%;
          }

          @media (max-width: 991px) {
            margin: 0;
            padding: 0 30px;
          }
          
          img {
            border-radius: 15px 0 0 15px;

            @media (max-width: 991px) {
              border-radius: 15px;
              margin-bottom: 60px;
            }

            @media (max-width: 575px) {
              border-radius: 5px;
            }
          }
`


