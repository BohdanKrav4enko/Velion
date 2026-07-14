import styled from "styled-components";

export const ShowMoreButton = styled.button<{ disabled?: boolean }>`
    min-width: 180px;

    height: 46px;

    padding: 0 24px;

    border: none;
    border-radius: 6px;

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};

    font-size: 15px;
    font-weight: 700;

    cursor: pointer;

    transition: .25s ease;

    &:hover:not(:disabled) {
        opacity: .9;

        transform: translateY(-2px);
    }

    &:disabled {
        opacity: .5;

        cursor: not-allowed;
    }
`;
export const CartBadge = styled.div`
    position: absolute;

    top: -6px;
    right: -6px;

    width: 16px;
    height: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};

    font-size: 9px;
    font-weight: 700;
`;
export const CategoryTitle = styled.h2`
    scroll-margin-top: 150px;
    
    margin: 28px 0 14px 28px;

    font-size: clamp(18px, 3vw, 26px);

    font-weight: 800;

    line-height: 1.1;

    letter-spacing: -1px;

    text-align: start;

    color: ${({ theme }) => theme.colors.text};
`;
export const ControlButton = styled.button`
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;

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

    svg {
        width: 18px;
        height: 18px;
    }
`;
export const AddToCartButton = styled.button`
    width: 38px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

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
        background: ${({ theme }) => theme.colors.surfaceSecondary};

        border-color: ${({ theme }) => theme.colors.primary};

        color: ${({ theme }) => theme.colors.primary};

        transform: translateY(-2px);

        box-shadow:
                0 6px 16px ${({ theme }) => theme.colors.shadow};
    }

    &:active {
        transform: translateY(0);

        background: ${({ theme }) => theme.colors.border};
    }

    svg {
        width: 18px;
        height: 18px;
    }
`;
export const ProductTitle = styled.h3`
    margin: 0 0 6px;

    min-height: 38px;

    font-size: 14px;
    font-weight: 600;

    line-height: 19px;

    color: ${({ theme }) => theme.colors.text};

    display: block;

    overflow: hidden;
`;
export const ProductPrice = styled.p`
    margin: 0;

    font-size: 20px;
    font-weight: 800;

    color: ${({ theme }) => theme.colors.text};
`;
export const ProductCardContainer = styled.article`
    display: flex;
    flex-direction: column;

    padding: 10px;

    background: ${({ theme }) => theme.colors.surface};

    border-radius: 6px;

    position: relative;

    min-width: 0;

    transition:
        transform .25s ease,
        box-shadow .25s ease;

    &:hover {
        transform: translateY(-3px);

        box-shadow:
            0 10px 25px ${({ theme }) => theme.colors.shadow};
    }
`;
export const ProductImageWrapper = styled.div`
    width: 100%;

    aspect-ratio: 1;


    display: flex;
    align-items: center;
    justify-content: center;


    margin-bottom: 10px;


    overflow: hidden;

    border-radius: 6px;



    img {
        width: 100%;
        height: 100%;
        object-fit: contain;


        transition: transform .3s ease;
    }



    ${ProductCardContainer}:hover img {
        transform: scale(1.05);
    }
`;
export const ProductFooter = styled.div`
    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 4px;
    margin-top: 4px;
`;
export const CartBadgeWrapper = styled.div`
    position: relative;
`;
export const Grid = styled.div`
    display: grid;


    grid-template-columns: repeat(6, minmax(0, 1fr));


    gap: 12px;


    width: 100%;



    @media (max-width: 1400px) {
        grid-template-columns: repeat(5, 1fr);
    }



    @media (max-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }



    @media (max-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }



    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);

        gap: 10px;
    }



    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;
export const ShowMoreButtonWrapper = styled.div`
    display: flex;

    justify-content: center;


    margin-top: 36px;

    margin-bottom: 20px;
`;