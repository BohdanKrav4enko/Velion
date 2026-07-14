import { Link } from "react-router-dom";
import { Pen } from "lucide-react";
import { useTranslation } from "react-i18next";

import * as S from "../ProductPageStyle";

interface ProductHeaderProps {
    title: string;
    admin: boolean;
    productId: number;
}

export const ProductHeader = ({
                                  title,
                                  admin,
                                  productId,
                              }: ProductHeaderProps) => {
    const { t } = useTranslation();

    return (
        <S.HeaderSection>

            <S.ProductTitle>
                {title}
            </S.ProductTitle>

            {admin && (
                <S.AdminActions>
                    <Link to={`/edit-product/${productId}`}>
                        <S.AdminButton>
                            <Pen size={16} />
                            {t("Edit product")}
                        </S.AdminButton>
                    </Link>
                </S.AdminActions>
            )}

        </S.HeaderSection>
    );
};