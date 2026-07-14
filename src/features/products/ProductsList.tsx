import {ErrorFetch, ProductSkeletonGrid, useAppSelector, useInfiniteProducts} from "@/components";
import {EmptyState, ProductCard} from "./index.ts";
import {useGetCategoriesQuery} from "@/api/productsApi.ts";
import {useTranslation} from "react-i18next";
import * as S from "./styles/ProductsCardStyle.ts";

export const ProductsList = () => {
    const categoryId = useAppSelector(state => state.app.categoryId);
    const {data: categories} = useGetCategoriesQuery()
    const {products, isLoading, error, loadMore, hasMore, refetch} = useInfiniteProducts(12);
    const {t} = useTranslation();

    if (isLoading && products.length === 0) return <ProductSkeletonGrid/>;
    if (error) return <ErrorFetch onRetry={()=>{refetch()}}/>;

    const category = categories?.find(cat => cat.id === categoryId);
    const categoryName = category ? category.name : t("The best deals for you");
    const filteredProducts = categoryId === 0
        ? products
        : products.filter(product => product.category.id === categoryId);

    return (
        <>
            <S.CategoryTitle id="products">{categoryName}</S.CategoryTitle>
            {filteredProducts.length === 0
                ? <EmptyState/>
                : <S.Grid>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </S.Grid>
            }
            {hasMore && filteredProducts.length > 0 && (
                <S.ShowMoreButtonWrapper>
                    <S.ShowMoreButton onClick={loadMore}>{t("Show more")}</S.ShowMoreButton>
                </S.ShowMoreButtonWrapper>
            )}
        </>
    );
};
