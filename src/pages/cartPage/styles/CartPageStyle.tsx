import styled from "styled-components";
import {Link} from "react-router-dom";

export const CartPageContainer = styled.div`
    width: 100%;
    max-width: 1600px;

    margin: 0 auto;

    padding: 48px 32px 80px;

    @media (max-width: 768px) {
        padding: 32px 20px 60px;
    }
`;
export const CartHeader = styled.div`
    margin-bottom: 48px;
`;
export const CartLayout = styled.div`
    display: grid;

    grid-template-columns:
        minmax(0,1fr)
        380px;

    gap: 40px;

    align-items: start;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`;
export const CartItems = styled.div`
    display: flex;
    flex-direction: column;

    gap: 16px;
`;
export const EmptyCartContainer = styled.div`
    min-height: 60vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
`;
export const EmptyTitle = styled.h2`
    margin: 24px 0 12px;

    font-size: 36px;
    font-weight: 800;
`;
export const ProductInfo = styled.div`
    min-width: 0;
`;
export const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    @media (max-width: 900px) {
        justify-content: flex-start;
    }
`;
export const Currency = styled.span`

`;
export const CartTitle = styled.h1`
    margin: 0;

    font-size: 48px;
    font-weight: 900;

    letter-spacing: -2px;

    color: ${({ theme }) => theme.colors.text};

    @media (max-width: 768px) {
        font-size: 34px;
    }
`;
export const CartSubtitle = styled.p`
    margin-top: 10px;

    color: ${({ theme }) => theme.colors.textSecondary};

    font-size: 16px;
`;
export const OrderSummary = styled.div`
    position: sticky;

    top: 100px;

    padding: 28px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.surface};
`;
export const SummaryTitle = styled.h2`
    margin: 0 0 28px;

    font-size: 22px;
    font-weight: 800;

    color: ${({ theme }) => theme.colors.text};
`;
export const SummaryRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 14px 0;

    color: ${({ theme }) => theme.colors.textSecondary};

    font-size: 15px;

    span:first-child {
        display: flex;
        align-items: center;

        gap: 10px;
    }

    span:last-child {
        font-weight: 600;

        color: ${({ theme }) => theme.colors.text};
    }

    svg {
        flex-shrink: 0;
    }
`;
export const BackButton = styled.button`
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
export const SummaryTotal = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 24px;
    padding-top: 24px;

    border-top: 1px solid ${({ theme }) => theme.colors.border};

    font-size: 28px;
    font-weight: 900;

    color: ${({ theme }) => theme.colors.text};
`;
export const CheckoutButton = styled.button`
    width: 100%;
    height: 56px;

    margin-top: 28px;

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
export const ClearButton = styled.button`
    width: 100%;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 4px;

    margin-top: 12px;

    background: ${({ theme }) => theme.colors.surface};

    border: .5px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    color: ${({ theme }) => theme.colors.danger};

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    transition: .12s;

    &:hover {
        background: rgba(239, 68, 68, .08);
    }
`;
export const EmptyIcon = styled.div`
    font-size: 120px;

    color: ${({ theme }) => theme.colors.textMuted};
`;
export const EmptyDescription = styled.p`
    color: ${({ theme }) => theme.colors.textSecondary};

    max-width: 500px;

    line-height: 1.7;
`;
export const ContinueShoppingButton = styled.button`
    margin-top: 28px;

    height: 52px;

    padding: 0 28px;

    border: none;
    border-radius: 6px;

    background: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.background};

    font-weight: 700;

    cursor: pointer;
`;
export const CartItemContainer = styled.div`
    position: relative;

    display: grid;

    grid-template-columns:
        120px
        minmax(0,1fr)
        140px
        120px;

    gap: 24px;

    align-items: center;

    padding: 24px;

    background: ${({ theme }) => theme.colors.surface};

    border: .5px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;

    transition:
        border-color .15s ease,
        box-shadow .15s ease;

    &:hover {
        border-color: ${({ theme }) => theme.colors.border};

        box-shadow:
            0 8px 24px ${({ theme }) => theme.colors.shadow};
    }

    @media (max-width: 900px) {
        grid-template-columns:
            90px
            1fr;

        gap: 18px;
    }
`;
export const ProductImage = styled.img`
    width: 100%;
    height: 100%;

    object-fit: contain;

    background: ${({ theme }) => theme.colors.surfaceSecondary};

    border-radius: 6px;


    @media (max-width: 900px) {
        width: 90px;
        height: 90px;
    }
`;
export const ProductTitle = styled(Link)`
    display: block;

    text-decoration: none;

    color: ${({ theme }) => theme.colors.text};

    font-size: 16px;
    font-weight: 700;

    line-height: 1.5;

    transition: .15s;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;
export const ProductPrice = styled.div`
    margin-top: 10px;

    font-size: 14px;

    color: ${({ theme }) => theme.colors.textSecondary};
`;
export const QuantityButton = styled.button`
    width: 38px;
    height: 38px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.surface};

    border: .5px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    color: ${({ theme }) => theme.colors.text};

    cursor: pointer;

    transition: .12s;

    &:hover {
        background: ${({ theme }) => theme.colors.surfaceSecondary};
        border-color: ${({ theme }) => theme.colors.border};
    }
`;
export const Quantity = styled.div`
    min-width: 30px;

    text-align: center;

    font-size: 15px;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.text};
`;
export const TotalPrice = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: flex-end;

    gap: 6px;

    font-size: 28px;
    font-weight: 800;

    color: ${({ theme }) => theme.colors.text};
`;
export const RemoveButton = styled.button`
    position: absolute;

    top: 16px;
    right: 16px;

    width: 34px;
    height: 34px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: .5px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    background: ${({ theme }) => theme.colors.surface};

    color: ${({ theme }) => theme.colors.textMuted};

    cursor: pointer;

    transition: .15s;

    &:hover {
        color: ${({ theme }) => theme.colors.danger};

        border-color: rgba(239, 68, 68, .25);

        background: rgba(239, 68, 68, .08);
    }
`;