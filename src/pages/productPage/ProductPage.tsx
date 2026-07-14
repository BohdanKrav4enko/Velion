import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Breadcrumbs, ProductPageSkeleton, useProductPage} from "@/components";
import {PATH} from "@/routes/paths.ts";
import * as S from "./ProductPageStyle"
import {ArrowLeft} from "lucide-react";
import {ProductActions, ProductHeader, ProductMetaInfo, ProductShare} from "@/pages";
import img from "../../assets/placeholder.webp";
import {formatDate} from "@/utils/formatDate.ts";
import i18n from "i18next";

export const ProductPage = () => {
    const navigate = useNavigate();

    const {t} = useTranslation();

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

    if (isLoading) return <ProductPageSkeleton/>;

    if (isError || !data) {
        navigate(PATH.ERROR_PAGE, {replace: true});
        return null;
    }

    return (
        <S.ProductContainer>
            <Breadcrumbs/>

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
                        slug={data.slug}
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
                    <S.ProductDates>
                        <S.DateItem>
                            <S.DateLabel>
                                {t("Added")}
                            </S.DateLabel>

                            <S.DateValue>
                                {formatDate(data.creationAt, i18n.language)}
                            </S.DateValue>
                        </S.DateItem>

                        <S.DateItem>
                            <S.DateLabel>
                                {t("Updated")}
                            </S.DateLabel>

                            <S.DateValue>
                                {formatDate(data.updatedAt, i18n.language)}
                            </S.DateValue>
                        </S.DateItem>
                    </S.ProductDates>
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

            <S.BackButton onClick={handleBack}>
                <ArrowLeft size={18}/>
                {t("Back")}
            </S.BackButton>
        </S.ProductContainer>
    );
};