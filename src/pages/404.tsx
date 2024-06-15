import {NotFoundMain, NotFoundSection, NotFoundHeading, NotFoundText, LinkToMain} from "../styles/NotFoundPage";

export const NotFound = () => {
    return (
        <NotFoundMain>
            <NotFoundSection>
                <div className="wrapper">
                    <NotFoundHeading>404 page</NotFoundHeading>
                    <NotFoundText>Page not found</NotFoundText>
                    <LinkToMain to="/">Go to the main page</LinkToMain>
                </div>
            </NotFoundSection>
        </NotFoundMain>
    )
}