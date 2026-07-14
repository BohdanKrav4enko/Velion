import styled from "styled-components";


export const ErrorWrapper = styled.div`
    min-height: 70vh;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    text-align: center;

    padding: 48px 32px;

    overflow: hidden;

    @media (max-width: 768px) {
        padding: 32px 20px;
    }
`;


export const ErrorImage = styled.img`
    width: min(420px, 80vw);

    height: auto;

    margin-bottom: 28px;

    object-fit: contain;

    animation: float 3s ease-in-out infinite;


    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-8px);
        }
    }
`;


export const ErrorTitle = styled.h1`
    margin: 0 0 12px;

    font-size: 48px;

    font-weight: 900;

    letter-spacing: -2px;

    color: ${({ theme }) => theme.colors.text};


    @media (max-width: 768px) {
        font-size: 34px;
    }
`;


export const ErrorDescription = styled.p`
    max-width: 500px;

    margin: 0;

    color: ${({ theme }) => theme.colors.textSecondary};

    font-size: 16px;

    line-height: 1.7;
`;


export const HomeButton = styled.button`
    height: 52px;

    margin-top: 28px;

    padding: 0 32px;

    border: none;

    border-radius: 6px;

    background: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.background};

    font-size: 15px;

    font-weight: 700;

    cursor: pointer;

    transition:
        transform .2s ease,
        opacity .2s ease;


    &:hover {
        opacity: .9;

        transform: translateY(-2px);
    }


    &:active {
        transform: translateY(0);
    }
`;