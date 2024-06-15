import {NavLink} from "react-router-dom";
import {FooterBlock, FooterCopyright, FooterNavigation, FooterMenu} from "./Footer.styled";
import {GetYear} from "../../models/date";

export const Footer = () => {
    return (
            <FooterBlock>
                <div className="wrapper">
                    <FooterNavigation className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column justify-space-between">
                        <NavLink to="/" className="logo"></NavLink>
                        <FooterMenu>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products">Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/partners">Vendors and partners</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contacts">Contacts</NavLink>
                            </li>
                        </FooterMenu>
                    </FooterNavigation>
                    <FooterCopyright>© {GetYear()}, Compuline</FooterCopyright>
                </div>
            </FooterBlock>
    )
}