import * as S from "./EditProductPageStyle";
import {useEditProduct} from "@/components";
import {ProductForm} from "@/pages";
import {useTranslation} from "react-i18next";

export const EditProductPage = () => {
    const {t} = useTranslation();

    const {
        product,
        isLoading,
        isEdit,
        selectedCategory,
        setSelectedCategory,
        handleSave,
        handleDelete,
    } = useEditProduct();

    if (isLoading) {
        return (
            <S.EditProductPageContainer>
                Loading...
            </S.EditProductPageContainer>
        );
    }

    return (
        <S.EditProductPageContainer>

            <S.PageHeader>

                <S.ProductStatus>
                    {t("Editing")}
                </S.ProductStatus>

            </S.PageHeader>

            <S.ProductFormWrapper>

                {product && (
                    <ProductForm
                        id={product.id}
                        initialTitle={product.title}
                        initialDescription={product.description}
                        initialPrice={product.price}
                        initialImage={product.images}
                        isEdit={isEdit}
                        onSave={handleSave}
                        onDelete={handleDelete}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                )}

            </S.ProductFormWrapper>

        </S.EditProductPageContainer>
    );
};