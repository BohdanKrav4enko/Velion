import styled from "styled-components";

export const Container = styled.section`
    width: 100%;

    margin-top: 64px;
    margin-bottom: 48px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 24px;

    @media (max-width: 992px) {
        grid-template-columns: 1fr;
    }
`;
export const Item = styled.div`
    min-height: 120px;

    padding: 24px;

    display: flex;
    align-items: center;

    gap: 18px;

    border-radius: 16px;

    background: ${({ theme }) => theme.colors.surface};

    border: 1px solid ${({ theme }) => theme.colors.border};

    box-shadow:
        0 8px 24px ${({ theme }) => theme.colors.shadow};

    transition: all .25s ease;

    svg {
        flex-shrink: 0;

        width: 34px;
        height: 34px;

        color: ${({ theme }) => theme.colors.text};
    }

    &:hover {
        transform: translateY(-4px);

        box-shadow:
            0 16px 32px ${({ theme }) => theme.colors.shadow};
    }

    h3 {
        margin: 0 0 6px;

        font-size: 16px;

        font-weight: 700;

        color: ${({ theme }) => theme.colors.text};
    }

    p {
        margin: 0;

        font-size: 14px;

        line-height: 1.5;

        color: ${({ theme }) => theme.colors.textSecondary};
    }

    @media (max-width: 480px) {
        padding: 20px;

        min-height: 100px;

        gap: 14px;

        svg {
            width: 28px;
            height: 28px;
        }
    }
`;