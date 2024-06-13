import {BlueLinkBlock} from "../components/BlueLinkBlock/BlueLinkBlock";
import {VendorsBanner, VendorsBannerText, VendorsHeading, VendorsMain, VendorsSection} from "../styles/VendorsPage";

export const Vendors = () => {
    return (
        <VendorsMain>
            <VendorsBanner>
                <div className="wrapper">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-12">
                            <VendorsHeading>Vendors and partners</VendorsHeading>
                            <VendorsBannerText>Compuline's reputation enables the company to build <br />
                                strong and reliable relationships with major manufacturers <br />and ensure quality
                                products to customers.</VendorsBannerText>
                        </div>
                        <div
                            className="col-md-6 col-sm-12 col-12 d-flex justify-content-center justify-content-sm-center justify-content-md-end">
                            <img src="https://static.compuline.hk/images/10.jpg" alt="Compuline" />
                        </div>
                    </div>
                </div>
            </VendorsBanner>

            <VendorsSection>
                <div className="wrapper">
                    <div className="row">
                        <div
                            className="col-md-6 col-sm-12 col-12 d-flex flex-column flex-sm-column flex-md-row order-2 order-sm-2 order-md-1">
                            <img src="https://static.compuline.hk/images/11.jpg" alt="Compuline" />
                            <BlueLinkBlock
                                link="/#formSection"
                                text="Become a partner"
                                classes="d-flex d-sm-flex d-md-none"/>
                        </div>
                        <div
                            className="col-xl-5 offset-xl-1 col-lg-6 col-md-6 col-sm-12 col-12 d-flex flex-column order-1 order-sm-1 order-md-2">
                            <p>Thanks to&nbsp;well-thought-out logistics, strategic planning, good knowledge of&nbsp;the
                                market, and a&nbsp;professional team, we&nbsp;have ensured reliable, clear, and
                                harmonious work of&nbsp;all the details within the large Compuline mechanism.</p>
                            <BlueLinkBlock
                                link="/#formSection"
                                text="Become a partner"
                                classes="d-none d-sm-none d-md-flex"/>
                        </div>
                    </div>
                </div>
            </VendorsSection>
        </VendorsMain>
    )
}