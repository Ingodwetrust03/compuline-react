import {ProductHeading, ProductItem} from "./ProductsBlock.styled";
import {Product} from "../../models/models";


export const ProductBlock = (props: {product: Product}) => {
    return (
        <div className={props.product.wide ? "col-12" : "col-sm-6 col-12"}>
            <ProductItem $background={props.product.background}></ProductItem>
            <ProductHeading>{props.product.title}</ProductHeading>
        </div>
    )
}