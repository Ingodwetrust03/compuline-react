import {Form} from "../components/Form/Form";
import {ProductsRow} from "../components/Products/ProductsRow";
import {BannerBlock} from "../components/Banners/BannerBlock";
import {ArrowLinkBlock} from "../components/ArrowLinkBlock/ArrowLinkBlock";
import {MainPageMain, MainPagePartnersSection} from "../styles/MainPage";


export const Main = () => {
    return (
        <MainPageMain>
            <BannerBlock
                background="https://static.compuline.hk/images/main-bg.jpg"
                backgroundMobile="https://static.compuline.hk/images/main-bg-mob.jpg"
                title="High Quality. Reliability. Technologies"
                text="Leading distributor of consumer electronics and home appliances offering a wide selection of products and services"
                button={true}
            />


            <section>
                <div className="wrapper">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between">
                            <h2>Products</h2>
                            <ArrowLinkBlock
                                link="/products"
                                text="Go to catalog"
                                classes="d-sm-flex d-none"/>
                        </div>
                        <div className="col-md-9 col-sm-12 col-12">
                            <p>Compuline offers a&nbsp;wide range of&nbsp;products that will help meet business needs
                                in&nbsp;many market segments.</p>
                            <ArrowLinkBlock
                                link="/products"
                                text="Go to catalog"
                                classes="d-sm-none d-flex"/>
                        </div>
                    </div>

                    <ProductsRow />

                </div>
            </section>


            <MainPagePartnersSection>
                <div className="wrapper">
                    <div className="row">
                        <div className="col-12 d-flex  flex-sm-row flex-column justify-content-between">
                            <h2>Partners</h2>
                            <ArrowLinkBlock
                                link="/partners"
                                text="Become a partner"
                                classes="d-sm-flex d-none"/>
                        </div>
                        <div className="col-md-9 col-sm-12 col-12">
                            <p>Compuline is&nbsp;committed to&nbsp;long-term relationships, so&nbsp;it&nbsp;extends full
                                and comprehensive support to&nbsp;partners at&nbsp;all stages.</p>
                            <ArrowLinkBlock
                                link="/partners"
                                text="Become a partner"
                                classes="d-sm-none d-flex"/>
                        </div>
                    </div>
                </div>
            </MainPagePartnersSection>

            <Form />

        </MainPageMain>
    )
}

