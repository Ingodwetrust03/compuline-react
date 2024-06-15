import {Banner} from "../../models/models";
import {BannerSection, BannerTextBlock} from "./BannerBlock.styled";
import {BannerButton} from "./Button/BannerButton";


export const BannerBlock = ({background, backgroundMobile, title, text, button}: Banner) => {
    return (
        <BannerSection
            $background={background}
            $mobile={backgroundMobile}>
            <div className="wrapper">
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h1>{title}</h1>
                    <BannerTextBlock>{text ? text :''}</BannerTextBlock>
                    {button ? <BannerButton color={title === "Products" ? "blue" : "white"} /> : ""}
                </div>
            </div>
        </BannerSection>

    )
}