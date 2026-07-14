import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Breadcrumbs, ProductPageSkeleton, useProductPage} from "@/components";
import {PATH} from "@/routes/paths.ts";
import * as S from "./ProductPageStyle"
import {ArrowLeft} from "lucide-react";
import {ProductActions, ProductHeader, ProductMetaInfo, ProductShare} from "@/pages";
import img from "../../assets/placeholder.webp";

export const ProductPage = () => {
    const navigate = useNavigate();

    const { t } = useTranslation();

    const {
        data,
        admin,
        existsInCart,
        handleChangeCategory,
        handleAddToCart,
        handleRemoveFromCart,
        handleShare,
        handleCopyLink,
        handleBack,
        isLoading,
        isError
    } = useProductPage();

    if (isLoading) return <ProductPageSkeleton />;

    if (isError || !data) {
        navigate(PATH.ERROR_PAGE, { replace: true });
        return null;
    }

    return (
        <S.ProductContainer>
            <Breadcrumbs />

            <S.ProductLayout>

                <S.ProductGallery>
                    <S.ProductImage
                        src={data.images?.[0]}
                        alt={data.title}
                        onError={(e) => (e.currentTarget.src = img)}
                    />
                </S.ProductGallery>

                <S.ProductInfo>

                    <ProductHeader
                        title={data.title}
                        admin={admin}
                        productId={data.id}
                    />

                    <ProductMetaInfo
                        data={data}
                        handleChangeCategory={handleChangeCategory}
                    />

                    <ProductActions
                        data={data}
                        existsInCart={existsInCart}
                        onAdd={handleAddToCart}
                        onRemove={handleRemoveFromCart}
                    />

                    <ProductShare
                        onShare={handleShare}
                        onCopy={handleCopyLink}
                    />

                </S.ProductInfo>

            </S.ProductLayout>

            <S.DescriptionSection>
                <S.SectionTitle>
                    {t("Description")}
                </S.SectionTitle>

                <S.ProductDescription>
                    {data.description}
                </S.ProductDescription>
            </S.DescriptionSection>

            <S.BackButton  onClick={handleBack}>
                <ArrowLeft size={18} />
                {t("Back")}
            </S.BackButton >
        </S.ProductContainer>
    );
};