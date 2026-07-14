import styled from "styled-components";
import {Link} from "react-router-dom";

export const Card = styled.div`
    background: ${({ theme }) => theme.colors.surface};

    border: 0.5px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;

    overflow: hidden;

    transition:
        transform .18s ease,
        border-color .18s ease,
        box-shadow .18s ease;

    &:hover {
        transform: translateY(-3px);

        border-color: ${({ theme }) => theme.colors.border};

        box-shadow:
            0 10px 35px ${({ theme }) => theme.colors.shadow};
    }
`;
export const FavoritesPageContainer = styled.div`
    width: 100%;
    max-width: 1600px;

    margin: 0 auto;

    padding: 32px 32px 60px;

    @media (max-width: 768px) {
        padding: 24px 20px 40px;
    }

    @media (max-width: 480px) {
        padding: 16px 16px 32px;
    }
`;
export const Header = styled.div`
    margin-bottom: 48px;
`;

export const Title = styled.h1`
    margin: 0;

    font-size: 48px;
    font-weight: 900;

    letter-spacing: -2px;

    color: ${({ theme }) => theme.colors.text};

    @media (max-width: 480px) {
        font-size: 34px;
    }
`;

export const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    
`;

export const Subtitle = styled.p`
    margin: 0;

    color: ${({ theme }) => theme.colors.textSecondary};

    font-size: 16px;
    font-weight: 500;
`;
export const ProductsGrid = styled.div`
    display: grid;

    grid-template-columns:
        repeat(auto-fill,minmax(280px,1fr));

    gap: 24px;
`;
export const EmptyState = styled.div`
    min-height: 50vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    @media (max-width: 480px) {
        min-height: 40vh;
    }
`;
export const Image = styled.img`
    width: 100%;
    height: 100%;

    object-fit: contain;

    padding: 24px;

    transition: transform .25s ease;

    ${Card}:hover & {
        transform: scale(1.04);
    }
`;
export const Content = styled.div`
    padding: 18px;
`;
export const TitleLink = styled(Link)`
    display: block;

    min-height: 44px;

    color: ${({ theme }) => theme.colors.text};

    text-decoration: none;

    font-size: 15px;
    font-weight: 600;

    line-height: 1.45;

    transition: color .15s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;
export const Footer = styled.div`
    margin-top: 18px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 12px;
`;
export const Price = styled.div`
    font-size: 24px;
    font-weight: 800;

    color: ${({ theme }) => theme.colors.text};
`;
export const CartButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 12px;

    min-width: 48px;
    height: 48px;

    transition:
            background .15s ease,
            border-color .15s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.surfaceSecondary};
        border-color: ${({ theme }) => theme.colors.border};
    }
`;
export const EmptyIcon = styled.div`
    font-size: 120px;
    font-weight: 100;

    color: ${({ theme }) => theme.colors.textMuted};

    line-height: 1;

    @media (max-width: 480px) {
        font-size: 80px;
    }
`;
export const EmptyTitle = styled.h2`
    margin: 20px 0 12px;

    font-size: 32px;
    font-weight: 800;

    color: ${({ theme }) => theme.colors.text};
`;
export const EmptyDescription = styled.p`
    max-width: 500px;

    color: ${({ theme }) => theme.colors.textSecondary};

    line-height: 1.7;

    font-size: 16px;
`;
export const ShopButton = styled.button`
    margin-top: 30px;

    height: 52px;

    padding: 0 34px;

    border: none;
    border-radius: 6px;

    background: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.background};

    font-size: 15px;
    font-weight: 700;

    cursor: pointer;

    transition: .15s;

    &:hover {
        opacity: .9;
    }
`;
export const ImageWrapper = styled.div`
    position: relative;

    width: 100%;
    aspect-ratio: 1;

    overflow: hidden;

    background: ${({ theme }) => theme.colors.surfaceSecondary};
`;
export const SecondaryButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 20px;

    border: none;
    background: transparent;

    color: ${({ theme }) => theme.colors.textSecondary};

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    transition: .15s;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;
export const DangerButton = styled.button`
    height: 46px;

    padding: 0 24px;

    border: .5px solid rgba(239, 68, 68, .25);
    border-radius: 6px;

    background: ${({ theme }) => theme.colors.surface};

    color: ${({ theme }) => theme.colors.danger};

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    transition: .12s;

    &:hover {
        background: rgba(239, 68, 68, .08);
    }
`;