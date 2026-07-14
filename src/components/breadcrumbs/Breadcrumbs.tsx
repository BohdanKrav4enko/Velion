import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetProductBySlugQuery } from "@/api/productsApi.ts";
import { useTranslation } from "react-i18next";

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

    const { slug } = useParams();

    const { data } = useGetProductBySlugQuery(
        { slug: slug! },
        {
            skip: !slug,
        }
    );

    return (
        <BreadcrumbsContainer>
            <Crumb>
                <Link to="/">
                    {t("Home")}
                </Link>
            </Crumb>

            {data?.title && (
                <Crumb>
                    {data.title}
                </Crumb>
            )}
        </BreadcrumbsContainer>
    );
};