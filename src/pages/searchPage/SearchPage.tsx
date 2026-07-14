import {useEffect, useMemo, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

import {useGetProductsQuery} from "@/api/productsApi.ts";
import {ProductCard} from "@/features";
import {SearchFilters} from "./filters/SearchFilters";

import * as S from "./styles/SearchPageStyle";
import {SearchPageSkeleton} from "@/components/skeletons/SearchPageSkeleton.tsx";

export const SearchPage = () => {
    const { t } = useTranslation();

    const [searchParams] = useSearchParams();

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);


    const query = searchParams.get("q")?.trim() || "";

    const {
        data: products = [],
        isLoading,
        isError,
    } = useGetProductsQuery({});

    const categories = useMemo(() => {
        return [
            ...new Set(
                products.map(
                    product => product.category.name
                )
            )
        ];
    }, [products]);

    const maxPrice = useMemo(() => {
        return Math.max(
            ...products.map(product => product.price),
            0
        );
    }, [products]);

    const [priceRange, setPriceRange] = useState<number[]>([0, 0]);

    useEffect(() => {
        if (maxPrice > 0) {
            setPriceRange([0, maxPrice]);
        }
    }, [maxPrice]);

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesSearch =
                !query ||
                product.title
                    .toLowerCase()
                    .includes(query.toLowerCase());

            const matchesCategory =
                selectedCategories.length === 0 ||
                selectedCategories.includes(
                    product.category.name
                );

            const matchesPrice =
                product.price >= priceRange[0] &&
                product.price <= priceRange[1];

            return (
                matchesSearch &&
                matchesCategory &&
                matchesPrice
            );
        });
    }, [
        products,
        query,
        selectedCategories,
        priceRange
    ]);

    if (isLoading) {
        return <SearchPageSkeleton />;
    }

    if (isError) {
        return (
            <S.PageContainer>
                <S.EmptyState>
                    <S.EmptyTitle>
                        {t("Failed to load products")}
                    </S.EmptyTitle>
                </S.EmptyState>
            </S.PageContainer>
        );
    }

    return (
        <S.PageContainer>
            <S.PageHeader>
                <S.Title>
                    {t("Search results")}
                </S.Title>

                <S.SearchQuery>
                    <S.SearchLabel>
                        {t("Search")}:
                    </S.SearchLabel>{" "}
                    {query}
                </S.SearchQuery>

                <S.ResultsCount>
                    {filteredProducts.length} {t("products found")}
                </S.ResultsCount>
            </S.PageHeader>

            <S.SearchLayout>
                <SearchFilters
                    categories={categories}
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    maxPrice={maxPrice}
                />

                <S.ContentContainer>
                    {filteredProducts.length > 0 ? (
                        <S.ProductsGrid>
                            {filteredProducts.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </S.ProductsGrid>
                    ) : (
                        <S.EmptyState>
                            <S.EmptyTitle>
                                {t("Nothing found")}
                            </S.EmptyTitle>

                            <S.EmptyText>
                                {t(
                                    "Try changing your query or using more general keywords."
                                )}
                            </S.EmptyText>
                        </S.EmptyState>
                    )}
                </S.ContentContainer>
            </S.SearchLayout>
        </S.PageContainer>
    );
};