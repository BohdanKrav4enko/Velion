import {ArrowLeft, House} from "lucide-react";
import {useNavigate} from "react-router-dom";
import React from "react";
import {useTranslation} from "react-i18next";
import styled from "styled-components";

export const NavigationWrapper = styled.div`
    display: flex;

    justify-content: center;

    gap: 12px;

    margin-top: 40px;


    @media(max-width: 480px) {
        flex-direction: column;

        width: 100%;
    }
`;
export const NavigationButton = styled.button`
    height: 46px;

    min-width: 140px;


    display: flex;

    align-items: center;

    justify-content: center;

    gap: 8px;


    padding: 0 22px;


    border: none;

    border-radius: 6px;


    background: #111827;

    color: white;


    font-size: 15px;

    font-weight: 700;


    cursor: pointer;


    transition: .25s ease;



    &:hover {
        background: #000;

        transform: translateY(-2px);
    }



    &:active {
        transform: translateY(0);
    }



    svg {
        width: 18px;

        height: 18px;
    }



    @media(max-width:480px) {
        width: 100%;
    }
`;

interface NavigationButtonsProps {
    homePath?: string;
}
export const NavigationButtons: React.FC<NavigationButtonsProps> = ({ homePath = '/' }) => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    return (
        <NavigationWrapper>
            <NavigationButton onClick={() => navigate(-1)}>
                <ArrowLeft /> {t("Back")}
            </NavigationButton>
            <NavigationButton onClick={() => navigate(homePath)}>
                <House /> {t("Home")}
            </NavigationButton>
        </NavigationWrapper>
    );
};
