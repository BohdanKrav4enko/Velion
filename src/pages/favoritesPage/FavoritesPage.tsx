import {FavoritePageSkeleton, useAppDispatch, useAppSelector} from "@/components";
import {useGetProductsQuery} from "@/api/productsApi.ts";
import {useTranslation} from "react-i18next";
import {clearFavorite} from "@/app/appSlice.ts";
import * as S from "./styles/FavoritesPageStyle"
import {FavoriteCard} from "@/pages/favoritesPage/FavoriteCard.tsx";
import {PATH} from "@/routes/paths.ts";
import {useNavigate} from "react-router-dom";
import {ArrowLeft} from "lucide-react";

export const FavoritesPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const favoritesIds = useAppSelector(state => state.app.favorites);
    const {data: products = [], isLoading} = useGetProductsQuery({offset: 0, limit: 1000});
    const {t} = useTranslation();
    if (isLoading) return <FavoritePageSkeleton/>;


    const favoriteProducts = products.filter(p => favoritesIds.includes(p.id));

    return (
        <S.FavoritesPageContainer>

            <S.Header>

                <S.Title>
                    {t("Favorites")}
                </S.Title>

                {favoriteProducts.length > 0 && (
                    <S.Actions>

                        <S.SecondaryButton onClick={() => navigate(PATH.HOME)}>
                            <ArrowLeft size={18}/>
                            {t("Continue shopping")}
                        </S.SecondaryButton>

                        <S.DangerButton
                            onClick={() => dispatch(clearFavorite())}
                        >
                            {t("Clear")}
                        </S.DangerButton>

                    </S.Actions>
                )}

                <S.Subtitle>
                    {favoriteProducts.length}
                    {" "}
                    {t("saved products")}
                </S.Subtitle>

            </S.Header>

            {favoriteProducts.length === 0 ? (
                <S.EmptyState>

                    <S.EmptyIcon>
                        ♡
                    </S.EmptyIcon>

                    <S.EmptyTitle>
                        {t("Nothing here yet")}
                    </S.EmptyTitle>

                    <S.EmptyDescription>
                        {t("Save products you like and they will appear here.")}
                    </S.EmptyDescription>

                    <S.ShopButton onClick={() => navigate(PATH.HOME)}>
                        {t("Return to shopping")}
                    </S.ShopButton>

                </S.EmptyState>
            ) : (
                <S.ProductsGrid>

                    {favoriteProducts.map(item => (
                        <FavoriteCard
                            key={item.id}
                            item={item}
                            onClose={() => {}}
                        />
                    ))}

                </S.ProductsGrid>
            )}

        </S.FavoritesPageContainer>
    );
};
