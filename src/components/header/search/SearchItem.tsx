import type {Product} from "@/types/types.ts";
import img from "../../../assets/placeholder.webp";

import * as S from "./SearchStyle";

interface Props {
    item: Product;
}

export const SearchItem = ({ item }: Props) => {
    return (
        <S.SearchItemContainer>

            <S.ProductLink
                to={`/product/${item.slug}`}
                aria-label={`View details of ${item.title}`}
            >
                <S.ProductImage
                    src={item.images[0]}
                    alt={item.title}
                    onError={e => (e.currentTarget.src = img)}
                />

                <S.ProductContent>

                    <S.ProductInfo>
                        <S.ProductTitle>
                            {item.title}
                        </S.ProductTitle>

                        <S.ProductCategory>
                            {item.category?.name}
                        </S.ProductCategory>
                    </S.ProductInfo>

                    <S.ProductPrice>
                        {item.price.toLocaleString()} ₴
                    </S.ProductPrice>

                </S.ProductContent>

            </S.ProductLink>

        </S.SearchItemContainer>
    );
};