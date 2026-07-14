import type {Product} from "@/types/types.ts";
import {useTranslation} from "react-i18next";
import * as S from "../ProductPageStyle"

interface ProductMetaInfoProps {
    handleChangeCategory: () => void;
    data: Product;
}

export const ProductMetaInfo = ({data}: ProductMetaInfoProps) => {
    const { t } = useTranslation();

    return (
        <S.MetaSection>

            <S.PriceBlock>
                <S.PriceLabel>
                    {t("Price")}
                </S.PriceLabel>

                <S.ProductPrice>
                    {data.price} ₴
                </S.ProductPrice>
            </S.PriceBlock>

            <S.CategoryBlock>
                <S.MetaLabel>
                    {t("Category")}
                </S.MetaLabel>

                {data.category ? (
                    <S.CategoryChangeButton>
                        {data.category.name}
                    </S.CategoryChangeButton>
                ) : (
                    <S.MetaValue>
                        {t("Unknown")}
                    </S.MetaValue>
                )}
            </S.CategoryBlock>

        </S.MetaSection>
    );
};