import {Link} from "../../models/models";
import { LinkBlock } from "./BlueLinkBlock.styled";

export const BlueLinkBlock = ({text, link, classes}: Link) => {
    return (
        <LinkBlock to={link} className={`${classes}`}>{text}</LinkBlock>
    )
}