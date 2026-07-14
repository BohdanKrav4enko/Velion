import { useEditProduct } from "@/components";
import { ProductForm } from "@/pages";

import * as S from "../editProductPage/EditProductPageStyle";
import {useTranslation} from "react-i18next";

export const AddProductPage = () => {

    const { t } = useTranslation()

    const {
        selectedCategory,
        setSelectedCategory,
        handleSave,
    } = useEditProduct();

    return (
        <S.EditProductPageContainer>
            <S.PageHeader>
                <S.ProductStatus>
                    {t("New product")}
                </S.ProductStatus>
            </S.PageHeader>

            <S.ProductFormWrapper>
                <ProductForm
                    onSave={handleSave}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </S.ProductFormWrapper>
        </S.EditProductPageContainer>
    );
};