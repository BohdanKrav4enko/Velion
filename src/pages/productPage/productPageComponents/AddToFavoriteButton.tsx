import {useAppDispatch, useAppSelector} from "@/components";
import {toggleFavorite} from "@/app/appSlice.ts";
import {Heart} from "lucide-react";
import type {Product} from "@/types/types.ts";
import * as S from "../ProductPageStyle"

export const AddToFavoriteButton = ({product}: { product: Product }) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(state => state.app.favorites);
    const exists = favorites.find((favorite) => favorite === product.id);
    const theme = useAppSelector(state => state.app.themeMode);

    const favoriteToggle = () => {
        dispatch(toggleFavorite(product.id))
    }

    return (
        <S.FavoriteButton
            active={!!exists}
            onClick={favoriteToggle}
            aria-label="Toggle favorite"
        >
            <Heart
                size={"22"}
                fill={exists ? "red" : "none"}
                color={exists ? "red" : theme === "light" ? "black" : "white"}
            />
        </S.FavoriteButton>
    );
};
