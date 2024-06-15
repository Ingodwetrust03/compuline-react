import {Link} from "../../models/models";
import { LinkBlock } from "./ArrowLinkBlock.styled";

export const ArrowLinkBlock = ({text, link, classes}: Link) => {
    return (
        <LinkBlock to={link} className={`${classes}`}>{text}</LinkBlock>
    )
}