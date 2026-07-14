import img from "../../assets/404.svg";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {PATH} from "@/routes/paths.ts";
import * as S from "./ErrorPageStyle";


export const ErrorPage = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();


    return (
        <S.ErrorWrapper>

            <S.ErrorImage
                src={img}
                alt="404"
            />

            <S.ErrorDescription>
                {t("Page not found")}
            </S.ErrorDescription>

            <S.HomeButton
                onClick={() => navigate(PATH.HOME)}
            >
                {t("Home")}
            </S.HomeButton>

        </S.ErrorWrapper>
    );
};