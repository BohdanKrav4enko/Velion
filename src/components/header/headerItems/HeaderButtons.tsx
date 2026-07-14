import {Heart, LogIn, ShoppingBasket} from "lucide-react";
import {useAppSelector,} from "@/hooks";
import {PATH} from "@/routes/paths.ts";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import * as S from "../styles/HeaderStyle"
import {ThemeToggle} from "@/components/header/headerItems/ThemeToggle.tsx";
import LanguageSelector from "@/components/header/headerItems/LanguageSelector.tsx";
import {Avatar} from "@/components";

export const    HeaderButtons = () => {
    const navigate = useNavigate();

    const items = useAppSelector(state => state.cart.items);
    const user = useAppSelector(state => state.auth.user);
    const profile = useAppSelector(state => state.auth.profile);

    const { t } = useTranslation();

    const handleProfile = () => {
        if (user) {
            navigate(PATH.PROFILE_PAGE);
        } else {
            navigate(PATH.AUTH_PAGE);
        }
    };

    return (
        <S.HeaderButtonsWrapper>
            <LanguageSelector/>
            <ThemeToggle/>
            <S.HeaderButton
                onClick={() => navigate(PATH.FAVORITES_PAGE)}
            >
                <Heart size={22} strokeWidth={1.8}/>
                <S.HeaderButtonLabel>
                    {t("FavoritesPage")}
                </S.HeaderButtonLabel>
            </S.HeaderButton>

            <S.HeaderButton onClick={handleProfile}>
                {user
                    ?
                    <>
                        <Avatar
                            color="#FFFFFF"
                            backgroundColor="#2563EB"
                            fontSize={13}
                            fontWeight={700}
                            width={32}
                            height={32}
                        />
                        <S.HeaderButtonLabel>{profile?.name || t("Account")}</S.HeaderButtonLabel>
                    </>
                    :
                    <>
                        <LogIn size={22}/>
                        <S.HeaderButtonLabel>{t("Login")}</S.HeaderButtonLabel>
                    </>}
            </S.HeaderButton>

            <S.CartButton
                onClick={() => navigate(PATH.CARD_PAGE)}
            >
                <ShoppingBasket size={22} strokeWidth={1.8}/>

                <S.HeaderButtonLabel>
                    {t("Basket")}
                </S.HeaderButtonLabel>

                {items.length > 0 && (
                    <S.CartBadge>
                        {items.length}
                    </S.CartBadge>
                )}
            </S.CartButton>

        </S.HeaderButtonsWrapper>
    );
};
