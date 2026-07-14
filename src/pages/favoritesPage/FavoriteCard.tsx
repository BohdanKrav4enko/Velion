import * as S from "./styles/FavoritesPageStyle";

import type {Product} from "@/types/types.ts";
import {Link} from "react-router-dom";

import img from "../../assets/placeholder.webp";

import {AddToCart} from "@/features";
import {AddToFavoriteButton} from "@/pages";

interface FavoriteCardProps {
    item: Product;
    onClose: () => void;
}

export const FavoriteCard = ({
                                 item,
                                 onClose
                             }: FavoriteCardProps) => {
    return (
        <S.Card>

            <S.ImageWrapper>

                <Link
                    to={`/product/${item.slug}`}
                    onClick={onClose}
                >
                    <S.Image
                        src={item.images[0]}
                        alt={item.title}
                        onError={(e) => {
                            e.currentTarget.src = img;
                        }}
                    />
                </Link>


            </S.ImageWrapper>

            <S.Content>

                <S.TitleLink
                    to={`/product/${item.slug}`}
                    onClick={onClose}
                >
                    {item.title}
                </S.TitleLink>

                <S.Footer>

                    <S.Price>
                        ${item.price}
                    </S.Price>

                    <S.CartButton>
                        <AddToFavoriteButton product={item}/>
                        <AddToCart product={item}/>
                    </S.CartButton>

                </S.Footer>

            </S.Content>

        </S.Card>
    );
};