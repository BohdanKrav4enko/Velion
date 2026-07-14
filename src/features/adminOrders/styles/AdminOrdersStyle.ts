import styled, { css } from "styled-components";
interface StatusBadgeProps {
    status: string;
}
type StatusVariant =
    | "new"
    | "processing"
    | "completed"
    | "cancelled";

interface StatusButtonProps {
    variant: StatusVariant;
}
export const OrderCard = styled.div`
    background: ${({ theme }) => theme.colors.surface};

    margin-bottom: 4px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 20px;

    padding: 28px;

    transition: .2s ease;

    &:hover {
        box-shadow: 0 12px 40px ${({ theme }) => theme.colors.shadow};
    }

    @media (max-width: 768px) {
        padding: 12px;
        border-radius: 16px;
    }
`;
export const OrderTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    gap: 32px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
export const CustomerInfo = styled.div`
    display: flex;
    flex-direction: column;

    gap: 14px;

    flex: 1;
`;
export const CustomerName = styled.h3`
    margin: 0;

    font-size: 26px;
    font-weight: 800;

    color: ${({ theme }) => theme.colors.text};
`;
export const CustomerEmail = styled.div`
    display: flex;
    align-items: center;

    gap: 10px;

    font-size: 15px;

    color: ${({ theme }) => theme.colors.textSecondary};

    svg {
        flex-shrink: 0;
    }
`;
export const CustomerPhone = styled.div`
    display: flex;
    align-items: center;

    gap: 10px;

    font-size: 15px;

    color: ${({ theme }) => theme.colors.textSecondary};

    svg {
        flex-shrink: 0;
    }
`;
export const OrderMeta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    gap: 12px;

    min-width: 220px;

    @media (max-width: 768px) {
        width: 100%;
        align-items: flex-start;
    }
`;
export const OrderPrice = styled.div`
    font-size: 34px;
    font-weight: 900;

    color: ${({ theme }) => theme.colors.text};

    letter-spacing: -1px;
`;
export const OrderItemsCount = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;

    font-size: 15px;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.textSecondary};
`;
export const OrderDate = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;

    font-size: 14px;

    color: ${({ theme }) => theme.colors.textMuted};
`;
export const OrderExpandButton = styled.button`
    width: 100%;
    height: 52px;

    margin-top: 28px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    border: none;
    border-radius: 12px;

    background: ${({ theme }) => theme.colors.surfaceSecondary};

    color: ${({ theme }) => theme.colors.text};

    font-size: 15px;
    font-weight: 700;

    cursor: pointer;

    transition: .15s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.surface};
    }

    svg {
        transition: .2s ease;
    }
`;
export const StatusBadge = styled.div<StatusBadgeProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 38px;

    padding: 0 18px;

    border-radius: 999px;

    font-size: 13px;
    font-weight: 700;

    text-transform: uppercase;
    letter-spacing: .8px;

    ${({ status }) =>
            status === "New" &&
            css`
            background: #eff6ff;
            color: #2563eb;
        `}

    ${({ status }) =>
            status === "Processing" &&
            css`
            background: #fffbeb;
            color: #d97706;
        `}

    ${({ status }) =>
            status === "Completed" &&
            css`
            background: #ecfdf5;
            color: #059669;
        `}

    ${({ status }) =>
            status === "Cancelled" &&
            css`
            background: #fef2f2;
            color: #dc2626;
        `}
`;
export const ProductCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 4px;
    gap: 20px;

    padding: 18px 22px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 16px;

    background: ${({ theme }) => theme.colors.surfaceSecondary};

    transition: .15s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.surface};

        box-shadow:
                0 6px 20px ${({ theme }) => theme.colors.shadow};
    }

    @media (max-width: 768px) {
        align-items: flex-start;

        gap: 12px;
        padding: 12px;
        border-radius: 12px;
    }
`;
export const ProductLeft = styled.div`
    display: flex;
    align-items: center;

    gap: 18px;
`;
export const ProductImage = styled.img`
    width: 72px;
    height: 72px;

    object-fit: cover;

    border-radius: 12px;

    background: ${({ theme }) => theme.colors.surface};
`;
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;

    gap: 8px;
`;
export const ProductTitle = styled.h4`
    margin: 0;

    font-size: 17px;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.text};
`;
export const ProductMeta = styled.div`
    font-size: 14px;

    color: ${({ theme }) => theme.colors.textSecondary};
`;
export const ProductTotal = styled.div`
    font-size: 24px;
    font-weight: 800;

    color: ${({ theme }) => theme.colors.text};

    white-space: nowrap;
`;
export const OrderSection = styled.section`
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};

    &:first-child {
        border-top: none;
    }

    @media (max-width: 768px) {
        padding: 4px;
    }
`;
export const SectionTitle = styled.h3`
    display: flex;
    align-items: center;

    gap: 10px;

    margin: 0 0 24px;

    font-size: 22px;
    font-weight: 800;

    color: ${({ theme }) => theme.colors.text};
`;
export const OrderInfoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    gap: 16px;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;
export const InfoItem = styled.div`
    padding: 20px;

    background: ${({ theme }) => theme.colors.surfaceSecondary};

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 16px;
`;
export const InfoLabel = styled.div`
    margin-bottom: 10px;

    font-size: 12px;
    font-weight: 700;

    text-transform: uppercase;
    letter-spacing: 1px;

    color: ${({ theme }) => theme.colors.textMuted};
`;
export const InfoValue = styled.div`
    display: flex;
    align-items: center;

    gap: 10px;

    font-size: 16px;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.text};

    svg {
        color: ${({ theme }) => theme.colors.textSecondary};
        flex-shrink: 0;
    }
`;
export const OrdersContainer = styled.div`
    width: 100%;
    max-width: 1400px;

    margin: 0 auto;

    padding: 48px 24px 80px;

    @media (max-width: 768px) {
        padding: 32px 16px 60px;
    }
`;
export const OrdersHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    gap: 20px;

    margin-bottom: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;
export const OrdersTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;

    gap: 8px;
`;
export const OrdersTitle = styled.h1`
    margin: 0;

    font-size: clamp(34px, 5vw, 52px);
    font-weight: 900;

    letter-spacing: -2px;

    color: ${({ theme }) => theme.colors.text};
`;
export const OrdersSubtitle = styled.p`
    margin: 0;

    font-size: 16px;
    line-height: 1.7;

    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const EmptyOrdersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 20px;

    min-height: 420px;

    border: 2px dashed ${({ theme }) => theme.colors.border};
    border-radius: 24px;

    background: ${({ theme }) => theme.colors.surfaceSecondary};

    text-align: center;
`;
export const EmptyOrdersTitle = styled.h2`
    margin: 0;

    font-size: 28px;
    font-weight: 800;

    color: ${({ theme }) => theme.colors.text};
`;

export const EmptyOrdersSubtitle = styled.p`
    margin: 0;

    max-width: 420px;

    font-size: 15px;
    line-height: 1.7;

    color: ${({ theme }) => theme.colors.textSecondary};
`;
export const StatsGrid = styled.div`
    display: grid;

    grid-template-columns: repeat(5, 1fr);

    gap: 20px;

    margin-bottom: 40px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`;
export const StatCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 10px;

    padding: 28px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 20px;

    background: ${({ theme }) => theme.colors.surface};

    transition: .2s ease;

    svg {
        color: ${({ theme }) => theme.colors.text};
    }

    &:hover {
        transform: translateY(-4px);

        box-shadow: 0 16px 40px ${({ theme }) => theme.colors.shadow};
    }

    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: flex-start;
        padding: 16px;
    }
`;

export const StatValue = styled.div`
    font-size: 34px;
    font-weight: 900;

    color: ${({ theme }) => theme.colors.text};
`;

export const StatLabel = styled.div`
    font-size: 14px;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.textSecondary};
`;
export const ActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 16px;


    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
    }
`;
export const ActionsGroup = styled.div`
    display: flex;
    gap: 12px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`;
export const StatusButton = styled.button<StatusButtonProps>`
    height: 44px;

    padding: 0 20px;

    border: none;
    border-radius: 999px;

    font-size: 14px;
    font-weight: 700;

    cursor: pointer;

    transition: .15s ease;

    ${({ variant }) => {
    switch (variant) {
        case "new":
            return css`
                    background: #dbeafe;
                    color: #2563eb;
                `;

        case "processing":
            return css`
                    background: #fef3c7;
                    color: #d97706;
                `;

        case "completed":
            return css`
                    background: #dcfce7;
                    color: #16a34a;
                `;

        case "cancelled":
            return css`
                    background: #fee2e2;
                    color: #dc2626;
                `;
    }
}}

    &:hover {
        transform: translateY(-2px);
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const DeleteButton = styled.button`
    height: 44px;

    padding: 0 24px;

    border: 1px solid #fecaca;
    border-radius: 999px;

    background: #fff5f5;
    color: #dc2626;

    font-size: 14px;
    font-weight: 700;

    cursor: pointer;

    transition: .15s ease;

    &:hover {
        background: #fee2e2;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;