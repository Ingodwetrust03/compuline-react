import {AboutMain, AboutSection} from "../styles/AboutPage";
import {BannerBlock} from "../components/Banners/BannerBlock";
import {ArrowLinkBlock} from "../components/ArrowLinkBlock/ArrowLinkBlock";



export const About = () => {
    return (
        <AboutMain>
            <BannerBlock
                background="https://static.compuline.hk/images/about-bg.jpg"
                backgroundMobile="https://static.compuline.hk/images/about-bg-mob.jpg"
                title="About us"
                text="Compuline is an international distributor of consumer electronics and home appliances offering a wide selection of products and services.
                       We cooperate with leading manufacturers all across the world."
                button={false}
            />

            <AboutSection>
                <div className="wrapper">
                    <div className="row d-flex item">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex order-2 order-sm-2 order-md-1">
                            <img src="https://static.compuline.hk/images/06.jpg" alt="Compuline" />
                        </div>
                        <div
                            className="col-lg-5 offset-lg-1 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center order-1 order-sm-1 order-md-2">
                            <p>Here you will find everything you need to&nbsp;establish an&nbsp;effective and convenient
                                working environment and expand your business and production. We&nbsp;work with
                                high-quality products and provide flexible conditions and prices.</p>
                            <ArrowLinkBlock
                                link="/#formSection"
                                text="Become a partner"/>
                        </div>
                    </div>

                    <div className="row d-flex item">
                        <div className="col-lg-5 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center">
                            <h2>Team</h2>
                            <p>We employ certified professionals who create conditions for the prosperity of partners
                                and customers.</p>
                        </div>
                        <div className="col-lg-6 offset-lg-1 col-md-6 col-sm-12 col-12">
                            <img src="https://static.compuline.hk/images/07.jpg" alt="Compuline" />
                        </div>
                    </div>

                    <div className="row d-flex">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex order-2 order-sm-2  order-md-1">
                            <div className="item">
                                <img src="https://static.compuline.hk/images/08.jpg" alt="Compuline" />
                            </div>
                        </div>
                        <div
                            className="col-lg-5 offset-lg-1 col-md-6 col-sm-12 col-12 d-flex  flex-column justify-content-center order-1 order-sm-1 order-md-2">
                            <h2>Mission</h2>
                            <p>We strive to help our partners achieve the best business results by offering quality
                                products, continuous support, and a tailored approach.</p>
                        </div>
                    </div>

                    <div className="row d-flex item">
                        <div className="col-lg-5 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center">
                            <h2>Wide Range</h2>
                            <p>We offer a wide range of products from the world's leading manufacturers of machinery and
                                electronics. And we are constantly expanding our portfolio to offer you the most modern
                                and best solutions.</p>
                            <ArrowLinkBlock
                                link="/products"
                                text="Go to catalog"/>
                        </div>
                        <div className="col-lg-6 offset-lg-1 col-md-6 col-sm-12 col-12">
                            <img src="https://static.compuline.hk/images/09.jpg" alt="Compuline" />
                        </div>
                    </div>
                </div>
            </AboutSection>

        </AboutMain>
    )
}