import {useState} from "react";
import {useGetProductsQuery} from "@/api/productsApi.ts";
import {useTranslation} from "react-i18next";
import * as S from "./SearchStyle"
import {SearchItem} from "@/components/header/search/SearchItem.tsx";
import {Search} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {SearchBarSkeleton} from "@/components";

export const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [focused, setFocused] = useState(false);
    const {t} = useTranslation();
    const navigate = useNavigate();

    const {data, isLoading, isError} = useGetProductsQuery({});
    if (isLoading) return <SearchBarSkeleton/>;
    if (isError || !data) return <div>{t("Failed to load products")}</div>;



    const filteredProducts = data.filter(
        p =>
            p.title
                .toLowerCase()
                .includes(query.toLowerCase())
    );
    return (
        <S.SearchContainer>

            <S.SearchIcon>
                <Search size={18} strokeWidth={2}/>
            </S.SearchIcon>

            <S.SearchInput
                onKeyDown={(e) => {
                    if (e.key === "Enter" && query.trim()) {
                        navigate(`/search?q=${encodeURIComponent(query)}`);
                    }
                }}
                value={query}
                placeholder={t("Search products")}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 200)}
            />

            {focused && query && (
                <S.Results>
                    {filteredProducts
                        .slice(0, 5)
                        .map(product => (
                            <SearchItem
                                key={product.id}
                                item={product}
                            />
                        ))}

                    {filteredProducts.length > 5 && (
                        <S.ViewAllButton
                            onMouseDown={() =>
                                navigate(`/search?q=${encodeURIComponent(query)}`)
                            }
                        >
                            {t("Show all")} ({filteredProducts.length})
                        </S.ViewAllButton>
                    )}

                </S.Results>
            )}

        </S.SearchContainer>
    );
};