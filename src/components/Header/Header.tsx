import {NavLink} from "react-router-dom";
import {
    HeaderBlock, HeaderMenu,
    HeaderMobileNavigationIcon,
    HeaderNavigation
} from "./Header.styled";

const mobileMenuAnimation = (e: any) => {

    const mobileMenuCloseAnimation = () => {
        document.querySelector('.mobileIcon').classList.remove("active");
        document.querySelector('nav ul').classList.remove("open");
    }

    if(e.currentTarget.classList.contains("active")) {
        mobileMenuCloseAnimation()
    } else {
        e.currentTarget.classList.add("active");
        document.querySelector('nav ul').classList.add("open");
        document.querySelectorAll('nav ul a').forEach((el) => {
            el.addEventListener("click", mobileMenuCloseAnimation)
        })
    }
}



export const Header = () => {
    return (
            <HeaderBlock>
            <div className="wrapper">
                <HeaderNavigation className="d-flex justify-space-between">
                    <NavLink to="/" className="logo"></NavLink>
                    <HeaderMobileNavigationIcon className="d-block d-sm-block d-md-none mobileIcon" onClick={mobileMenuAnimation}>
                        <span></span>
                        <span></span>
                    </HeaderMobileNavigationIcon>
                    <HeaderMenu>
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
                    </HeaderMenu>
                </HeaderNavigation>
            </div>
        </HeaderBlock>
    )
}