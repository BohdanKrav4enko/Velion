import styled from "styled-components";

export const Content = styled.div`
    max-width: 650px;
`;
export const Title = styled.h1`
    font-size: 42px;

    font-weight: 800;

    color: white;

    margin-bottom: 16px;


    @media (max-width: 768px) {
        font-size: 32px;

        margin-bottom: 12px;
    }


    @media (max-width: 480px) {
        font-size: 26px;

        line-height: 1.2;
    }
`;
export const Description = styled.p`
    font-size: 18px;

    color: ${({ theme }) => theme.colors.textSecondary};

    margin-bottom: 32px;

    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 24px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        margin-bottom: 20px;
    }
`;
export const Button = styled.button`
    height: 52px;

    padding: 0 28px;

    border-radius: 8px;

    border: none;

    background: ${({ theme }) => theme.colors.surface};

    color: ${({ theme }) => theme.colors.text};

    font-weight: 700;

    cursor: pointer;

    transition: .2s ease;

    &:hover {
        transform: translateY(-2px);

        background: ${({ theme }) => theme.colors.surfaceSecondary};
    }

    @media (max-width: 480px) {
        height: 46px;

        padding: 0 22px;

        font-size: 14px;
    }
`;
export const Container = styled.section`
    min-height: 320px;

    border-radius: 24px;

    padding: 48px;

    display: flex;
    align-items: center;

    background:
        linear-gradient(
            135deg,
            #111827,
            #374151
        );

    margin-bottom: 48px;

    @media (max-width: 768px) {
        min-height: 260px;

        padding: 32px 24px;

        border-radius: 18px;

        margin-bottom: 32px;
    }

    @media (max-width: 480px) {
        min-height: 220px;

        padding: 28px 20px;

        border-radius: 16px;
    }
`;