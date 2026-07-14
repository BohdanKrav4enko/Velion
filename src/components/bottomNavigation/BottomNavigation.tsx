import {Heart, House, LogIn, ShoppingBasket} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {PATH} from "@/routes/paths";
import {useTranslation} from "react-i18next";
import {useAppSelector} from "@/hooks";

import * as S from "./BottomNavigationStyles.ts";
import {Avatar} from "@/components";

export const BottomNavigation = () => {
    const user = useAppSelector(state => state.auth.user);
    const profile = useAppSelector(state => state.auth.profile);
    const navigate = useNavigate();
    const {t} = useTranslation();

    const items = useAppSelector(state => state.cart.items);
    const handleProfile = () => {
        if (user) {
            navigate(PATH.PROFILE_PAGE);
        } else {
            navigate(PATH.AUTH_PAGE);
        }
    };
    return (
        <S.Container>
            <S.Item onClick={() => navigate(PATH.HOME)}>
                <House size={22}/>
                <span>{t("Home")}</span>
            </S.Item>

            <S.Item onClick={() => navigate(PATH.FAVORITES_PAGE)}>
                <Heart size={22}/>
                <span>{t("FavoritesPage")}</span>
            </S.Item>

            <S.Item onClick={() => navigate(PATH.CARD_PAGE)}>
                <S.IconWrapper>
                    <ShoppingBasket size={22}/>

                    {items.length > 0 && (
                        <S.Badge>
                            {items.length}
                        </S.Badge>
                    )}
                </S.IconWrapper>

                <span>{t("Basket")}</span>
            </S.Item>

            <S.Item onClick={handleProfile}>


                {user
                    ?
                    <>
                        <Avatar
                            color="#FFFFFF"
                            backgroundColor="#2563EB"
                            fontWeight={700}
                            fontSize={12}
                            width={28}
                            height={28}
                        />
                        <span>{profile?.name || t("Account")}</span>
                    </>
                    :
                    <>
                        <LogIn size={22}/>
                        <span>{t("Login")}</span>
                    </>}
            </S.Item>
        </S.Container>
    );
};