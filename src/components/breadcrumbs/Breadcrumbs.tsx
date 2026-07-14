import {Link, useParams} from "react-router-dom";
import styled from "styled-components";
import {useGetProductByIdQuery} from "@/api/productsApi.ts";
import {useTranslation} from "react-i18next";

const BreadcrumbsContainer = styled.nav`
    font-size: 14px;
    margin-bottom: 16px;

    color: ${({ theme }) => theme.colors.textSecondary};
`;

const Crumb = styled.span`
    color: ${({ theme }) => theme.colors.text};

    &:not(:last-child)::after {
        content: " / ";
        margin: 0 4px;
        color: ${({ theme }) => theme.colors.textMuted};
    }
`;

export const Breadcrumbs = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const productId = Number(id);
    const { data } = useGetProductByIdQuery({id: productId});

    let productName: string | null = null;
    if (id && data) {
        productName = data?.title || null;
    }

    return (
        <BreadcrumbsContainer>
            <Crumb>
                <Link to="/">{t("Home")}</Link>
            </Crumb>
            {productName && <Crumb>{productName}</Crumb>}
        </BreadcrumbsContainer>
    );
};
