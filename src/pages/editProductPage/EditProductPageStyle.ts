import styled from "styled-components";

export const EditProductPageContainer = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 24px 80px;
`;
export const ProductFormWrapper = styled.div`
    overflow: hidden;

    padding: 40px;

    border-radius: 24px;

    background: ${({ theme }) => theme.colors.surface};

    box-shadow:
            0 20px 60px ${({ theme }) => theme.colors.shadow};

    @media (max-width: 768px) {
        padding: 24px;
    }
`;
export const FormSection = styled.section`
    margin-bottom: 50px;

    &:last-child {
        margin-bottom: 0;
    }
`;
export const FormField = styled.div`
    margin-bottom: 28px;

    &:last-child {
        margin-bottom: 0;
    }
`;
export const FormActions = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 50px;

    gap: 16px;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;
export const ActionsGroup = styled.div`
    display: flex;
    gap: 16px;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;
export const PageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    gap: 20px;

    margin-bottom: 36px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
export const FormTitle = styled.h1`
    margin: 0 0 30px;

    font-size: clamp(34px, 5vw, 48px);
    font-weight: 800;

    letter-spacing: -1px;

    color: ${({ theme }) => theme.colors.text};
`;
export const ProductStatus = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 40px;

    padding: 0 18px;

    border-radius: 999px;

    background: rgba(16, 185, 129, .12);
    color: #10b981;

    font-size: 13px;
    font-weight: 700;

    text-transform: uppercase;
    letter-spacing: 1px;

    flex-shrink: 0;
`;
export const PrimaryButton = styled.button`
    height: 58px;
    padding: 0 34px;

    border: none;
    border-radius: 14px;

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};

    font-size: 15px;
    font-weight: 700;

    cursor: pointer;

    transition: .2s;

    &:hover {
        transform: translateY(-3px);

        box-shadow:
            0 12px 30px ${({ theme }) => theme.colors.shadow};
    }
`;
export const SecondaryButton = styled.button`
    height: 58px;
    padding: 0 34px;

    border: 2px solid ${({ theme }) => theme.colors.border};
    border-radius: 14px;

    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};

    font-size: 15px;
    font-weight: 700;

    cursor: pointer;

    transition: .2s;

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;
export const DangerButton = styled.button`
    height: 58px;
    padding: 0 34px;

    border: none;
    border-radius: 14px;

    background: ${({ theme }) => theme.colors.danger};
    color: white;

    font-size: 15px;
    font-weight: 700;

    cursor: pointer;

    transition: .2s;

    &:hover {
        transform: translateY(-3px);

        box-shadow:
            0 12px 30px rgba(248,113,113,.3);
    }
`;
export const FieldLabel = styled.label`
    display: block;

    margin-bottom: 10px;

    font-size: 14px;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.textSecondary};

    text-transform: uppercase;
    letter-spacing: 1px;
`;
export const Input = styled.input`
    width: 100%;
    height: 62px;

    padding: 0 22px;

    border: 2px solid transparent;
    border-radius: 14px;

    background: ${({ theme }) => theme.colors.surfaceSecondary};
    color: ${({ theme }) => theme.colors.text};

    font-size: 16px;

    transition: .2s;

    &::placeholder {
        color: ${({ theme }) => theme.colors.textMuted};
    }

    &:focus {
        outline: none;

        border-color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.surface};

        box-shadow:
            0 10px 30px ${({ theme }) => theme.colors.shadow};
    }
`;
export const Select = styled.select`
    width: 100%;
    height: 62px;

    padding: 0 22px;

    border: 2px solid transparent;
    border-radius: 14px;

    background: ${({ theme }) => theme.colors.surfaceSecondary};
    color: ${({ theme }) => theme.colors.text};

    font-size: 16px;

    cursor: pointer;

    transition: .2s;

    &:focus {
        outline: none;

        border-color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.surface};
    }
`;
export const Textarea = styled.textarea`
    width: 100%;
    min-height: 220px;

    padding: 22px;

    border: 2px solid transparent;
    border-radius: 14px;

    background: ${({ theme }) => theme.colors.surfaceSecondary};
    color: ${({ theme }) => theme.colors.text};

    font-size: 16px;
    line-height: 1.8;

    resize: vertical;

    transition: .2s;

    &::placeholder {
        color: ${({ theme }) => theme.colors.textMuted};
    }

    &:focus {
        outline: none;

        border-color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.surface};

        box-shadow:
            0 10px 30px ${({ theme }) => theme.colors.shadow};
    }
`;
export const SectionTitle = styled.h2`
    margin: 0 0 24px;

    font-size: 24px;
    font-weight: 800;

    color: ${({ theme }) => theme.colors.text};
`;