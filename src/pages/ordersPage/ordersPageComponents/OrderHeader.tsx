import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

import styled from "styled-components";
import {ArrowLeft, RefreshCcw} from "lucide-react";
import {PATH} from "@/routes/paths.ts";

export const OrderHeaderContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    margin-bottom: 24px;
`;
export const OrderHeaderButtonContainer = styled.div`
    display: flex;

    gap: 12px;

    @media (max-width: 500px) {
        width: 100%;
        flex-direction: column;
    }
`;
export const HeaderButton = styled.button`
    height: 48px;

    padding: 0 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    border: 1px solid #e5e7eb;
    border-radius: 12px;

    background: white;
    color: #111827;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    transition:
        background .15s ease,
        border-color .15s ease,
        transform .15s ease,
        box-shadow .15s ease;

    svg {
        width: 18px;
        height: 18px;

        flex-shrink: 0;
    }

    &:hover {
        background: #f9fafb;

        border-color: #d1d5db;

        transform: translateY(-2px);

        box-shadow: 0 8px 20px rgba(0,0,0,.06);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const OrderHeader = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <OrderHeaderContainer>

            <OrderHeaderButtonContainer>

                <HeaderButton onClick={() => navigate(PATH.HOME)}>
                    <ArrowLeft size={18}/>
                    {t("Back")}
                </HeaderButton>

                <HeaderButton onClick={() => window.location.reload()}>
                    <RefreshCcw size={18}/>
                    {t("Refresh")}
                </HeaderButton>

            </OrderHeaderButtonContainer>

        </OrderHeaderContainer>
    );
};
