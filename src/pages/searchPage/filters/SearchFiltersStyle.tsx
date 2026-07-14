import styled from "styled-components";

export const FiltersContainer = styled.aside`
    width: 300px;
    flex-shrink: 0;

    @media (max-width: 1110px) {
        width: 100%;
    }
`;
export const FiltersTitle = styled.h2`
    margin: 0 0 32px;

    font-size: 28px;
    font-weight: 800;

    color: ${({ theme }) => theme.colors.text};

    letter-spacing: -1px;
`;
export const FilterSection = styled.div`
    padding-bottom: 28px;
    margin-bottom: 28px;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    &:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
    }
`;
export const SectionTitle = styled.h3`
    margin: 0 0 18px;

    font-size: 13px;
    font-weight: 700;

    text-transform: uppercase;
    letter-spacing: 1px;

    color: ${({ theme }) => theme.colors.textSecondary};
`;
export const CategoryList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;
export const PriceContainer = styled.div`
    padding: 4px 0 0;
`;
export const PriceValues = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 20px;

    font-size: 14px;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.text};
`;
export const PriceValue = styled.div`
    padding: 10px 14px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    min-width: 90px;

    text-align: center;

    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
`;
export const ResetFiltersButton = styled.button`
    width: 100%;
    height: 46px;

    margin-top: 24px;

    background: ${({ theme }) => theme.colors.surface};

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    color: ${({ theme }) => theme.colors.text};

    font-size: 14px;
    font-weight: 700;

    cursor: pointer;

    transition: .15s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.surfaceSecondary};
        border-color: ${({ theme }) => theme.colors.textMuted};
    }

    &:active {
        transform: translateY(1px);
    }
`;
export const FiltersAccordionButton = styled.button`
    display: none;

    width: 100%;
    height: 56px;

    padding: 0 20px;

    align-items: center;
    justify-content: space-between;

    background: ${({ theme }) => theme.colors.surface};

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 12px;

    cursor: pointer;

    font-size: 15px;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.text};

    transition: .15s;

    &:hover {
        background: ${({ theme }) => theme.colors.surfaceSecondary};
        border-color: ${({ theme }) => theme.colors.textMuted};
    }

    @media (max-width: 1024px) {
        display: flex;
    }
`;
export const FiltersAccordionLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
        flex-shrink: 0;
    }
`;
export const FiltersContent = styled.div<{ opened: boolean }>`
    @media (max-width: 1100px) {
        display: ${({ opened }) =>
                opened ? "block" : "none"};

        margin-top: 12px;

        padding: 20px;

        background: ${({ theme }) => theme.colors.surface};

        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 16px;

        box-shadow:
                0 8px 24px ${({ theme }) => theme.colors.shadow};
    }

    @media (min-width: 1025px) {
        display: block;
    }
`;
export const CategoryItem = styled.label`
    display: flex;
    align-items: center;
    gap: 12px;

    cursor: pointer;

    font-size: 15px;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.text};

    transition: color .15s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }

    input {
        width: 18px;
        height: 18px;

        margin: 0;

        cursor: pointer;

        accent-color: ${({ theme }) => theme.colors.primary};

        flex-shrink: 0;
    }
`;