import {ProductsRow} from "../components/Products/ProductsRow";
import {BannerBlock} from "../components/Banners/BannerBlock";
import {ProductsMain, ProductsSection} from "../styles/ProductsPage";

export const Products = () => {
    return (
        <ProductsMain>
            <BannerBlock
                background="https://static.compuline.hk/images/catalogue-bg.jpg"
                backgroundMobile="https://static.compuline.hk/images/catalogue-bg-mob.jpg"
                title="Products"
                text="Compuline will prove particularly useful to you if you seek to work with products from the categories of computer and household appliances, office equipment, and complex systems."
                button={true}
            />

            <ProductsSection>
                <div className="wrapper">
                    <ProductsRow />
                </div>
            </ProductsSection>
        </ProductsMain>
    )
}