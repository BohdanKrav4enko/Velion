import {Heart} from "lucide-react";
import {toggleFavorite} from "@/app/appSlice.ts";
import {useAppDispatch, useAppSelector} from "@/components";
import type {Product} from "@/types/types.ts";
import * as S from "../../styles/ProductsCardStyle"

export const AddToFavorite = ({product}: { product: Product }) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(state => state.app.favorites);
    const exists = favorites.find((favorite) => favorite === product.id);
    const theme = useAppSelector(state => state.app.themeMode);

    const favoriteToggle = () => {
        dispatch(toggleFavorite(product.id))
    }

    return (
        <S.CartBadgeWrapper onClick={favoriteToggle}>
            <S.ControlButton aria-label="Favorite">
                <Heart
                    size={"22"}
                    fill={exists ? "red" : "none"}
                    color={exists ? "red" : theme === "light" ? "black" : "white"}
                />
            </S.ControlButton>
        </S.CartBadgeWrapper>
    );
};
