import styled from "styled-components";

export const InfoPageContainer = styled.main`
    width: 100%;
    max-width: 1000px;

    margin: 0 auto;

    padding: 32px 20px 60px;
`;
export const InfoPageTitle = styled.h1`
    margin: 0 0 40px;

    font-size: clamp(32px, 4vw, 48px);

    font-weight: 800;

    line-height: 1.1;

    letter-spacing: -2px;

    color: ${({ theme }) => theme.colors.text};

    text-align: left;

    position: relative;

    &::after {
        content: "";

        display: block;

        width: 48px;

        height: 4px;

        margin-top: 16px;

        background: ${({ theme }) => theme.colors.text};

        border-radius: 6px;
    }
`;

export const InfoBlock = styled.section`
    padding: 24px 0;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    &:last-of-type {
        border-bottom: none;
    }
`;

export const InfoBlockTitle = styled.h2`
    margin: 0 0 12px;

    font-size: 20px;

    font-weight: 700;

    line-height: 1.3;

    color: ${({ theme }) => theme.colors.text};
`;

export const InfoBlockText = styled.p`
    margin: 0;

    max-width: 850px;

    font-size: 16px;

    font-weight: 400;

    line-height: 1.7;

    color: ${({ theme }) => theme.colors.textSecondary};
`;
export const InfoNavigation = styled.div`
    margin-top: 40px;


    display: flex;

    justify-content: center;
`;
export const InfoList = styled.ul`
    margin: 16px 0 0;

    padding-left: 22px;

    color: ${({ theme }) => theme.colors.textSecondary};

    font-size: 16px;

    line-height: 1.7;

    li {
        margin-bottom: 8px;
    }
`;

export const FaqItem = styled.section`
    padding: 20px 0;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    &:last-of-type {
        border-bottom: none;
    }
`;

export const FaqQuestion = styled.h2`
    margin: 0 0 10px;

    font-size: 18px;

    font-weight: 700;

    line-height: 1.4;

    color: ${({ theme }) => theme.colors.text};
`;

export const FaqAnswer = styled.p`
    margin: 0;

    max-width: 850px;

    font-size: 15px;

    font-weight: 400;

    line-height: 1.7;

    color: ${({ theme }) => theme.colors.textSecondary};
`;