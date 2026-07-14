import styled from "styled-components";

export const HeaderSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const ProductTitle = styled.h1`
    margin: 0;

    font-size: clamp(32px, 4vw, 48px);
    font-weight: 800;
    line-height: 1.1;

    color: ${({ theme }) => theme.colors.text};

    letter-spacing: -1.5px;
`;
export const AdminActions = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 12px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
export const AdminButton = styled.button`
    height: 64px;

    flex-shrink: 0;

    padding: 0 18px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    background: ${({ theme }) => theme.colors.surface};

    color: ${({ theme }) => theme.colors.textSecondary};

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    transition: all .2s ease;

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.text};

        transform: translateY(-1px);

        box-shadow:
            0 8px 20px ${({ theme }) => theme.colors.shadow};
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const MetaSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;

    padding: 32px;

    background: ${({ theme }) => theme.colors.background};

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;
`;
export const PriceBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
export const PriceLabel = styled.span`
    font-size: 13px;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.textMuted};

    text-transform: uppercase;
    letter-spacing: 1px;
`;
export const ProductPrice = styled.div`
    font-size: 48px;
    font-weight: 800;

    color: ${({ theme }) => theme.colors.text};

    line-height: 1;
`;
export const CategoryBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;
export const MetaLabel = styled.span`
    font-size: 13px;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.textMuted};

    text-transform: uppercase;
    letter-spacing: 1px;
`;
export const MetaValue = styled.span`
    color: ${({ theme }) => theme.colors.textSecondary};

    font-size: 15px;
`;
export const CategoryChangeButton = styled.button`
    margin-right: 2px;
    
    border: none;

    background: inherit;
    color: ${({ theme }) => theme.colors.textSecondary};

    font-size: 13px;
    font-weight: 600;

    cursor: pointer;

    transition: all .2s ease;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    min-width: 0;
    max-width: 100%;

    &:hover {
        text-decoration: underline;
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }
`;
export const ActionsSection = styled.div`
    display: flex;
    gap: 16px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
export const PrimaryActionButton = styled.button`
    flex-shrink: 0;
    flex-grow: 1;

    height: 64px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    border: none;
    border-radius: 6px;

    background: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.background};

    font-size: 17px;
    font-weight: 700;

    cursor: pointer;

    transition: all .25s ease;

    box-shadow:
            0 10px 30px ${({ theme }) => theme.colors.shadow};

    &:hover {
        transform: translateY(-3px);

        box-shadow:
                0 16px 40px ${({ theme }) => theme.colors.shadow};
    }

    &:active {
        transform: translateY(-1px);
    }
`;
export const FavoriteButton = styled.button<{ active: boolean }>`
    width: 38px;
    height: 38px;

    flex-shrink: 0;
    flex-grow: 1;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};

    cursor: pointer;

    transition:
            transform .2s ease,
            background .2s ease,
            border-color .2s ease,
            color .2s ease,
            box-shadow .2s ease;


    &:hover {
        background: rgba(239, 68, 68, .08);

        border-color: rgba(239, 68, 68, .25);

        color: ${({ theme }) => theme.colors.danger};

        transform: translateY(-2px);

        box-shadow:
                0 6px 16px rgba(239, 68, 68, .15);
    }

    &:active {
        transform: translateY(0);

        background: rgba(239, 68, 68, .14);
    }
`;
export const ProductContainer = styled.div`
    max-width: 1400px;
    margin: 0 auto;

    padding: 120px 20px 80px;
`;
export const ProductLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 520px;

    gap: 60px;

    margin-top: 40px;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`;
export const ProductGallery = styled.div`
    position: sticky;
    top: 110px;

    align-self: start;

    @media (max-width: 1100px) {
        position: static;
    }
`;
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;

    gap: 28px;
`;
export const ShareSection = styled.div`
    display: flex;
    gap: 12px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
export const ProductImage = styled.img`
    width: 100%;
    aspect-ratio: 1;

    object-fit: contain;

    padding: 48px;

    background: ${({ theme }) => theme.colors.surface};

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    box-shadow:
            0 10px 40px ${({ theme }) => theme.colors.shadow};

    @media (max-width: 768px) {
        padding: 24px;
        border-radius: 6px;
    }
`;
export const DescriptionSection = styled.section`
    margin-top: 60px;

    padding: 40px;

    background: ${({ theme }) => theme.colors.surface};

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    box-shadow:
            0 10px 40px ${({ theme }) => theme.colors.shadow};

    @media (max-width: 768px) {
        padding: 24px;
    }
`;
export const SectionTitle = styled.h2`
    margin: 0 0 24px;

    font-size: 28px;
    font-weight: 800;

    color: ${({ theme }) => theme.colors.text};
`;
export const ProductDescription = styled.p`
    margin: 0;

    font-size: 17px;
    line-height: 1.9;

    color: ${({ theme }) => theme.colors.textSecondary};
`;
export const BackButton = styled.button`
    margin-top: 32px;

    height: 64px;
    padding: 0 24px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    background: ${({ theme }) => theme.colors.surface};

    color: ${({ theme }) => theme.colors.textSecondary};

    font-size: 15px;
    font-weight: 600;

    cursor: pointer;

    transition: all .25s ease;

    &:hover {
        transform: translateY(-2px);

        box-shadow:
            0 10px 24px ${({ theme }) => theme.colors.shadow};

        color: ${({ theme }) => theme.colors.text};
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const SecondaryActionButton = styled.button`
    flex-shrink: 0;
    flex-grow: 1;

    height: 56px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    background: ${({ theme }) => theme.colors.surface};

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    color: ${({ theme }) => theme.colors.textSecondary};

    font-size: 15px;
    font-weight: 600;

    cursor: pointer;

    transition: all .25s ease;

    &:hover {
        transform: translateY(-2px);

        border-color: ${({ theme }) => theme.colors.textMuted};

        box-shadow:
            0 10px 24px ${({ theme }) => theme.colors.shadow};

        color: ${({ theme }) => theme.colors.text};
    }

    &:active {
        transform: translateY(0);
    }
`;