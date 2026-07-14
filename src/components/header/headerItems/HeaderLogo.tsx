import {Link} from "react-router-dom";
import * as S from "../styles/HeaderStyle";

export const HeaderLogo = () => {
    return (
        <Link to="/" aria-label="Go to homepage">
            <S.Title>{"Velion".toUpperCase()}</S.Title>
        </Link>
        )
};
