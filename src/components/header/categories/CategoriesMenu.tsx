import { useMemo, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

import { useGetProductsQuery } from "@/api/productsApi.ts";

import * as S from "./CategoriesMenuStyle";

export const CategoriesMenu = () => {
    const [opened, setOpened] = useState(false);

    const { data: products = [] } =
        useGetProductsQuery({});

    const categories = useMemo(() => {
        return [
            ...new Set(
                products.map(
                    product => product.category.name
                )
            )
        ];
    }, [products]);

    return (
        <S.Container>

            <S.Button
                onClick={() =>
                    setOpened(prev => !prev)
                }
            >
                <Menu size={20} />

                <span>
                    Categories
                </span>

                <ChevronDown
                    size={16}
                    style={{
                        transform: opened
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: ".2s"
                    }}
                />
            </S.Button>

            {opened && (
                <S.Dropdown>

                    {categories.map(category => (
                        <S.CategoryItem
                            key={category}
                        >
                            {category}
                        </S.CategoryItem>
                    ))}

                </S.Dropdown>
            )}

        </S.Container>
    );
};