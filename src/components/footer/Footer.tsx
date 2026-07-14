import {PATH} from "@/routes/paths.ts";
import {useTranslation} from "react-i18next";

import * as S from "./styles/FooterStyle";
import {useNavigate} from "react-router-dom";

export const Footer = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()

    return (
        <S.FooterContainer>

            <S.FooterGrid>

                <S.FooterBrand>
                    <S.Logo>
                        Velion
                    </S.Logo>

                    <S.Description>
                        {t("Everything you need for work, home, and everyday life.")}

                    </S.Description>
                </S.FooterBrand>

                <S.FooterColumn>
                    <S.ColumnTitle>{t("My Account")}</S.ColumnTitle>

                    <S.FooterButton onClick={()=>navigate(PATH.CARD_PAGE)}>{t("Basket")}</S.FooterButton>
                    <S.FooterButton onClick={()=>navigate(PATH.FAVORITES_PAGE)}>{t("Favorites")}</S.FooterButton>
                    <S.FooterButton onClick={()=>navigate(PATH.AUTH_PAGE)}>{t("Account")}</S.FooterButton>
                </S.FooterColumn>

                <S.FooterColumn>
                    <S.ColumnTitle>{t("Company")}</S.ColumnTitle>

                    <S.FooterLink to={PATH.ABOUT_PAGE}>
                        {t("About")}
                    </S.FooterLink>

                    <S.FooterLink to={PATH.CONTACT_PAGE}>
                        {t("Contact")}
                    </S.FooterLink>

                </S.FooterColumn>

                <S.FooterColumn>
                    <S.ColumnTitle>{t("Support")}</S.ColumnTitle>

                    <S.FooterLink to={PATH.FAQ_PAGE}>
                        FAQ
                    </S.FooterLink>

                    <S.FooterLink to={PATH.PRIVACY_PAGE}>
                        {t("Privacy Policy")}
                    </S.FooterLink>
                </S.FooterColumn>

            </S.FooterGrid>

            <S.FooterBottom>
                <S.Copyright>
                    © 2026 Velion
                </S.Copyright>

                <S.BottomText>
                    {t("Your trusted online store")}
                </S.BottomText>
            </S.FooterBottom>

        </S.FooterContainer>
    );
};