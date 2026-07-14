import {CircleDollarSign, Heart, ShoppingBasket} from "lucide-react";
import type {Product} from "@/types/types.ts";
import {useTranslation} from "react-i18next";

import * as S from "../ProductPageStyle";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {toggleFavorite} from "@/app/appSlice.ts";

interface ProductActionsProps {
    existsInCart: boolean;
    onAdd: () => void;
    onRemove: () => void;
    data: Product;
}

export const ProductActions = ({
                                   existsInCart,
                                   onAdd,
                                   onRemove,
                                   data,
                               }: ProductActionsProps) => {
    const favorites = useAppSelector(state => state.app.favorites);
    const exists = favorites.find((favorite) => favorite === data.id);
    const theme = useAppSelector(state => state.app.themeMode);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const favoriteToggle = () => {
        dispatch(toggleFavorite(data.id))
    }

    return (
        <S.ActionsSection>

            <S.PrimaryActionButton
                onClick={existsInCart ? onRemove : onAdd}
            >
                {existsInCart ? (
                    <>
                        <ShoppingBasket size={20} />
                        {t("In cart")}
                    </>
                ) : (
                    <>
                        <CircleDollarSign size={20} />
                        {t("Add to cart")}
                    </>
                )}
            </S.PrimaryActionButton>

            <S.FavoriteProductButton
                active={!!exists}
                onClick={favoriteToggle}
                aria-label="Toggle favorite"
            >
                <Heart
                    size={"22"}
                    fill={exists ? "red" : "none"}
                    color={exists ? "red" : theme === "light" ? "black" : "white"}
                />
            </S.FavoriteProductButton>
        </S.ActionsSection>
    );
};