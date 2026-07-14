import styled from "styled-components";

export const FormWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 16px;
`;
export const FormRow = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 12px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
export const FormInputWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 6px;
`;
export const AuthPageContainer = styled.div`
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;



    @media (max-width: 1100px) {
        flex-direction: column-reverse;
        gap: 48px;
    }
`;
export const AuthLeftSide = styled.div`
    max-width: 540px;

    @media (max-width: 1100px) {
        text-align: center;
    }
`;
export const AuthCard = styled.div`
    width: 100%;
    max-width: 460px;

    padding: 32px;

    background: ${({ theme }) => theme.colors.surface};

    border-radius: 8px;

    box-shadow:
            0 2px 12px rgba(0,0,0,.15);
`;
export const FormContainer = styled.div`
    width: 100%;
`;
export const SwitchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 12px;
`;
export const ButtonsContainer = styled.div`
    width: 100%;

    display: flex;
    gap: 12px;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`;
export const StyledSignUpInput = styled.input<{ hasError?: boolean }>`
    width: 100%;
    height: 56px;

    padding: 0 16px;

    background: ${({ theme }) => theme.colors.surface};

    border: 1px solid
    ${({ hasError, theme }) =>
    hasError
        ? theme.colors.danger
        : theme.colors.border};

    border-radius: 6px;

    font-size: 17px;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.text};

    outline: none;

    transition:
        border-color .15s ease,
        box-shadow .15s ease;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};

        box-shadow:
            0 0 0 3px ${({ theme }) => theme.colors.shadow};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.textMuted};
    }
`;
export const InputError = styled.span`
    font-size: 13px;

    color: ${({ theme }) => theme.colors.danger};

    padding-left: 4px;
`;
export const StyledButton = styled.button`
    width: 100%;
    height: 56px;

    margin-top: 8px;

    background: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.background};

    border: none;
    border-radius: 6px;

    font-size: 17px;
    font-weight: 700;

    cursor: pointer;

    transition: .15s ease;

    &:hover {
        opacity: .9;
    }

    &:active {
        transform: scale(.99);
    }
`;
export const Logo = styled.h1`
    margin: 0 0 12px;

    font-size: 72px;
    font-weight: 800;

    letter-spacing: -3px;

    color: ${({ theme }) => theme.colors.text};

    @media (max-width: 768px) {
        font-size: 48px;
        letter-spacing: -2px;
    }

    @media (max-width: 480px) {
        font-size: 38px;
        letter-spacing: -1px;
    }
`;

export const Description = styled.p`
    margin: 0;

    font-size: 22px;
    line-height: 2;

    color: ${({ theme }) => theme.colors.textSecondary};

    @media (max-width: 768px) {
        font-size: 18px;
        line-height: 1.6;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        line-height: 1.2;
    }
`;
export const CardTitle = styled.h2`
    margin: 0;

    font-size: 32px;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.text};
`;
export const CardSubtitle = styled.p`
    margin: 8px 0 24px;

    font-size: 15px;

    color: ${({ theme }) => theme.colors.textSecondary};
`;
export const Divider = styled.div`
    height: 1px;

    margin: 24px 0;

    background: ${({ theme }) => theme.colors.border};
`;
export const SwitchText = styled.span`
    color: ${({ theme }) => theme.colors.textSecondary};

    font-size: 14px;
`;
export const SwitchButton = styled.button`
    width: 100%;
    height: 48px;

    border: none;
    border-radius: 6px;

    background: ${({theme}) => theme.colors.primary};

    color: ${({theme}) => theme.colors.background};

    font-size: 15px;
    font-weight: 700;

    cursor: pointer;

    transition: .15s;

    &:hover {
        opacity: .9;
    }
`;
export const BackButton = styled.button`
width: 100%;
    height: 48px;

    background: ${({ theme }) => theme.colors.surface};

    border: 1px solid ${({ theme }) => theme.colors.border};

    border-radius: 6px;

    color: ${({ theme }) => theme.colors.textSecondary};

    font-size: 15px;
    font-weight: 600;

    cursor: pointer;

    transition: .15s;

    &:hover {
        background: ${({ theme }) => theme.colors.surfaceSecondary};

        border-color: ${({ theme }) => theme.colors.textMuted};
    }
`;