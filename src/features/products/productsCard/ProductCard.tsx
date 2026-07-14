import type {Product} from "@/types/types.ts";
import * as S from "../styles/ProductsCardStyle.ts"
import {AddToCart, AddToFavorite} from "../index.ts";
import {Link} from "react-router-dom";
import img from "../../../assets/placeholder.webp";
import {FlexWrapper} from "@/components/FlexWrapper.tsx";
import {CategoryChangeButton} from "@/pages/productPage/ProductPageStyle.ts";

export const ProductCard = ({product}: { product: Product }) => {

    return (
        <S.ProductCardContainer>
            <Link to={`/product/${product.slug}`} aria-label={`Go to ${product.title} page`}>
                <S.ProductImageWrapper>
                    <img
                        src={product.images[0]}
                        alt={`Image of ${product.title}`}
                        onError={e => (e.currentTarget.src = img)}
                    />
                </S.ProductImageWrapper>
            </Link>
            <S.ProductTitle>{product.title}</S.ProductTitle>
            <S.ProductFooter>
                {product.category ? (
                    <CategoryChangeButton>
                        {product.category.name}
                    </CategoryChangeButton>
                ) : "Unknown"}
            </S.ProductFooter>
            <S.ProductFooter>
                <S.ProductPrice>{product.price} ₴</S.ProductPrice>
                <FlexWrapper style={{gap: '4px'}}>
                    <AddToFavorite product={product} aria-label={`Add ${product.title} to favorites`}/>
                    <AddToCart product={product} aria-label={`Add ${product.title} to cart`}/>
                </FlexWrapper>
            </S.ProductFooter>
        </S.ProductCardContainer>

    );
};
