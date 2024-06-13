import {ProductsItems} from "./ProductsRow.styled";
import {Products} from "../../models/products";
import {ProductBlock} from "./ProductsBlock";

export const ProductsRow = () => {
    return (
        <ProductsItems className="row">
            {
                Products.map((product, index) => {
                    return (<ProductBlock product={product} key={index} />)
                })
            }
        </ProductsItems>
        )

}