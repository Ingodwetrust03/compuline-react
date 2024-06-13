import {ContactsAddressBlock, ContactsWrapper, ContactsEmailBlock, ContactsHeading} from "./ContactsBlock.styled";

export const ContactsBlock = () => {
    return (
        <ContactsWrapper className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
            <ContactsHeading>Contacts</ContactsHeading>
            <img src="https://static.compuline.hk/images/12.jpg" alt="Compuline"
                 className="d-block d-sm-block d-md-block d-lg-none" />
            <ContactsAddressBlock>
                UNIT E, 26/F, CNT TOWER, 338 HENNESSY ROAD, WANCHAI, HONG KONG
            </ContactsAddressBlock>
            <ContactsEmailBlock
                href="mailto:info@сompuline.hr"
                target="_blank"
                rel="noreferrer">info@compuline.hk</ContactsEmailBlock>
        </ContactsWrapper>
    )
}