import {ContactsContentWrapper, ContactsInnerWrapper, ContactsMain, ContactsWrapper} from "./ContactsSection.styled";
import {ContactsBlock} from "./ContactsBlock";

export const ContactsSection = () => {
    return (
        <ContactsMain>
            <ContactsWrapper>
                <ContactsInnerWrapper>
                    <ContactsContentWrapper>
                        <div className="row">
                            <ContactsBlock />
                            <div className="col-xl-8 col-lg-6 col-md-12 col-sm-12 col-12 d-none d-sm-none d-md-none d-lg-flex justify-content-end">
                                <img src="https://static.compuline.hk/images/12.jpg" alt="Compuline" />
                            </div>
                        </div>
                    </ContactsContentWrapper>
                </ContactsInnerWrapper>
            </ContactsWrapper>
        </ContactsMain>
    )
}