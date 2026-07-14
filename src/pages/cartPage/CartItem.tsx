import * as S from "./styles/CartPageStyle";

import { useAppDispatch } from "@/components";

import type { Product } from "@/types/types.ts";

import img from "../../assets/placeholder.webp";

import {
    Minus,
    Plus,
    X
} from "lucide-react";

import {
    addCart,
    decrementCart,
    removeCart
} from "@/app/cartSlice.ts";

import { Link } from "react-router-dom";

interface CartItemProps {
    item: Product & {
        quantity: number;
    };
}

export const CartItem = ({
                             item
                         }: CartItemProps) => {
    const dispatch = useAppDispatch();

    return (
        <S.CartItemContainer>

            <S.RemoveButton
                onClick={() => dispatch(removeCart(item.id))}
                aria-label={`Remove ${item.title} from cart`}
            >
                <X size={16}/>
            </S.RemoveButton>

            <Link to={`/product/${item.id}`}>
                <S.ProductImage
                    src={item.images[0]}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.src = img;
                    }}
                />
            </Link>

            <S.ProductInfo>

                <S.ProductTitle to={`/product/${item.id}`}>
                    {item.title}
                </S.ProductTitle>

                <S.ProductPrice>
                    ₴{item.price.toLocaleString()}
                </S.ProductPrice>

            </S.ProductInfo>

            <S.QuantityContainer>

                <S.QuantityButton
                    onClick={() =>
                        dispatch(
                            decrementCart(item.id)
                        )
                    }
                >
                    <Minus size={16}/>
                </S.QuantityButton>

                <S.Quantity>
                    {item.quantity}
                </S.Quantity>

                <S.QuantityButton
                    onClick={() =>
                        dispatch(
                            addCart(item)
                        )
                    }
                >
                    <Plus size={16}/>
                </S.QuantityButton>

            </S.QuantityContainer>

            <S.TotalPrice>
                <span>{(item.price * item.quantity).toFixed(2).toLocaleString()}</span>
                <S.Currency>₴</S.Currency>
            </S.TotalPrice>

        </S.CartItemContainer>
    );
};