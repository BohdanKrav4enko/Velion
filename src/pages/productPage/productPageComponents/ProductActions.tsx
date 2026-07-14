import { CircleDollarSign, ShoppingBasket } from "lucide-react";
import { AddToFavoriteButton } from "@/pages";
import type { Product } from "@/types/types.ts";
import { useTranslation } from "react-i18next";

import * as S from "../ProductPageStyle";

interface ProductActionsProps {
    existsInCart: boolean;
    onAdd: () => void;
    onRemove: () => void;
    data: Product;
}

export const ProductActions = ({
                                   existsInCart,
                                   onAdd,
                                   onRemove,
                                   data,
                               }: ProductActionsProps) => {
    const { t } = useTranslation();

    return (
        <S.ActionsSection>

            <S.PrimaryActionButton
                onClick={existsInCart ? onRemove : onAdd}
            >
                {existsInCart ? (
                    <>
                        <ShoppingBasket size={20} />
                        {t("In cart")}
                    </>
                ) : (
                    <>
                        <CircleDollarSign size={20} />
                        {t("Add to cart")}
                    </>
                )}
            </S.PrimaryActionButton>

            <AddToFavoriteButton product={data} />

        </S.ActionsSection>
    );
};