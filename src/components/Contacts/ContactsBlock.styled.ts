import styled from 'styled-components';

export const ContactsWrapper = styled.div``

export const ContactsAddressBlock = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 32px;

        &:before {
            content: '';
            display: flex;
            width: 30px;
            height: 30px;
            flex-shrink: 0;
            background: url("https://static.compuline.hk/images/ep_location.svg") center center no-repeat;
            background-size: contain;
        }
    }
 `

export const ContactsEmailBlock = styled.a`
    display: flex;
    gap: 10px;
    color: #272727;
      
        &:before {
            content: '';
            display: flex;
            width: 30px;
            height: 30px;
            flex-shrink: 0;
            background: url("https://static.compuline.hk/images/ant-design_mail-outlined.svg") center center no-repeat;
            background-size: contain;
        }
    }
`

export const ContactsHeading = styled.h1`
    padding: 80px 0 57% 0;

    @media (max-width: 991px) {
        padding: 100px 0 60px 0;
    }
`

