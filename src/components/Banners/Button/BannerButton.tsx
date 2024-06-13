import {BannerLink} from "./BannerButton.styled";
import React from "react";
import {useNavigate} from "react-router-dom";



export const BannerButton = (props:{color: string}) => {
    const navigate = useNavigate();

    const scrollToForm = () => {
        navigate('/#formSection');
        setTimeout(() => {
            document.getElementById('formSection').scrollIntoView({ behavior: "smooth", block: "start"})
        }, 50);

    }

    return (
        <BannerLink to='/#formSection' $color={props.color} onClick={scrollToForm}>Become a partner</BannerLink>
    )
}
