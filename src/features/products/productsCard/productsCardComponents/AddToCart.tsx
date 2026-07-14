import {CircleCheckBig, ShoppingCart} from "lucide-react";
import {useAppDispatch, useCart} from "@/components";
import {setNotification} from "@/app/appSlice.ts";
import type {Product} from "@/types/types.ts";
import {useTranslation} from "react-i18next";
import * as S from "../../styles/ProductsCardStyle"
import {addCart, removeCart} from "@/app/cartSlice.ts";

export const AddToCart = ({product}: { product: Product }) => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const { inCart } = useCart();
    const exists = inCart(product.id);


    const handleCartClick = () => {
            if (exists) {
                dispatch(removeCart(product.id));
            } else {
                dispatch(addCart(product));
                dispatch(setNotification({ message: t("The product has been successfully added to your cart."), type: "success", duration: 1500}));
            }
    };
    return (
        <S.CartBadgeWrapper onClick={handleCartClick}>
            <S.AddToCartButton aria-label="Add to cart"><ShoppingCart /></S.AddToCartButton>
            {exists && <S.CartBadge><CircleCheckBig /></S.CartBadge>}
        </S.CartBadgeWrapper>
    );
};

