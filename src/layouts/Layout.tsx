import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import React from "react";
import {Footer} from "../components/Footer/Footer";
import {NormalizeStyle} from "../styles/NormalizeStyle";
import '../styles/styles.scss'

export const Layout = () => {
    return (
        <>
            <NormalizeStyle />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}