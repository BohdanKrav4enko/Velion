import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100%;
    max-width: 1600px;

    margin: 0 auto;

    padding: 48px 32px 80px;

    @media (max-width: 768px) {
        padding: 32px 20px 60px;
    }

    @media (max-width: 480px) {
        padding: 24px 16px 40px;
    }
`;
export const SearchLayout = styled.div`
    display: grid;
    grid-template-columns: 280px 1fr;

    gap: 48px;

    align-items: start;

    margin-top: 48px;

    @media (max-width: 1100px) {
        grid-template-columns: 240px 1fr;
        gap: 32px;
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;
export const ContentContainer = styled.div`
    width: 100%;
    min-width: 0;
`;
export const ProductsGrid = styled.div`
    display: grid;

    grid-template-columns:
        repeat(
            auto-fill,
            minmax(280px, 1fr)
        );

    gap: 28px;

    @media (max-width: 768px) {
        grid-template-columns:
            repeat(
                auto-fill,
                minmax(220px, 1fr)
            );

        gap: 20px;
    }

    @media (max-width: 520px) {
        grid-template-columns: 1fr;
    }
`;
export const EmptyState = styled.div`
    min-height: 420px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
`;
export const EmptyTitle = styled.h2`
    margin: 0 0 12px;

    font-size: 42px;
    font-weight: 900;

    color: ${({ theme }) => theme.colors.text};

    letter-spacing: -1px;
`;

export const EmptyText = styled.p`
    max-width: 500px;

    margin: 0;

    font-size: 16px;
    line-height: 1.8;

    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const PageHeader = styled.div`
    display: flex;
    flex-direction: column;

    gap: 12px;

    margin-bottom: 48px;

    padding-bottom: 24px;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Title = styled.h1`
    margin: 0;

    font-size: clamp(34px, 5vw, 52px);
    font-weight: 900;

    color: ${({ theme }) => theme.colors.text};

    letter-spacing: -2px;

    line-height: 1;

    @media (max-width: 768px) {
        font-size: 36px;
    }
`;

export const SearchQuery = styled.div`
    font-size: 22px;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.textSecondary};

    word-break: break-word;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

export const SearchLabel = styled.span`
    color: ${({ theme }) => theme.colors.text};
`;

export const ResultsCount = styled.div`
    font-size: 14px;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.textMuted};

    text-transform: uppercase;

    letter-spacing: 1px;
`;