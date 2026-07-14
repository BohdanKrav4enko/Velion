import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    min-height: 80px;

    padding: 0 48px;

    display: flex;
    align-items: center;
    gap: 32px;

    background: #111827;

    backdrop-filter: blur(12px);

    border-bottom: 1px solid #1f2937;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 1000;

    box-shadow:
            0 4px 20px rgba(0,0,0,.25);

    @media (max-width: 1200px) {
        padding: 0 32px;
        gap: 20px;
    }

    @media (max-width: 992px) {
        min-height: auto;

        padding: 16px 24px;

        display: grid;
        grid-template-columns: 1fr auto;

        gap: 16px;
    }

    @media (max-width: 768px) {
        padding: 12px 20px;
        gap: 12px;
    }

    @media (max-width: 480px) {
        padding: 12px 16px;
    }
`;


export const Title = styled.h1`
    font-size: 40px;
    font-weight: 800;

    letter-spacing: -1px;

    color: #f9fafb;


    cursor: pointer;

    user-select: none;

    transition: transform .25s ease;


    &:hover {
        transform: translateY(-1px);
    }


    @media (max-width: 768px) {
        font-size: 38px;
    }

    @media (max-width: 480px) {
        font-size: 34px;
    }
`;


export const CartWrapper = styled.div`
    position: relative;

    width: 52px;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 16px;

    background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f5f5f5 100%
    );

    border: 1px solid #ececec;

    cursor: pointer;

    transition: all 0.25s ease;

    box-shadow:
            0 4px 16px rgba(0, 0, 0, 0.05);

    &:hover {
        transform: translateY(-2px);

        box-shadow:
                0 10px 28px rgba(0, 0, 0, 0.10);
    }

    @media (max-width: 768px) {
        width: 46px;
        height: 46px;
        border-radius: 14px;
    }

    @media (max-width: 480px) {
        width: 42px;
        height: 42px;
        border-radius: 12px;
    }
`;

export const Badge = styled.div`
    position: absolute;

    top: -5px;
    right: -5px;

    min-width: 22px;
    height: 22px;

    padding: 0 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 999px;

    background: linear-gradient(
            135deg,
            #ff5f6d 0%,
            #ff9966 100%
    );

    color: white;

    font-size: 11px;
    font-weight: 700;

    border: 2px solid white;

    box-shadow:
            0 4px 12px rgba(255, 95, 109, 0.35);

    @media (max-width: 480px) {
        min-width: 18px;
        height: 18px;
        font-size: 10px;
    }
`;

export const ButtonLabel = styled.p`
    font-size: 15px;
    font-weight: 600;

    color: #374151;

    transition: color .2s ease;

    cursor: pointer;

    &:hover {
        color: #111827;
    }

    @media (max-width: 992px) {
        display: none;
    }
`;
export const HeaderButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 1200px) {
        gap: 8px;
    }
`;

export const HeaderButton = styled.button`
    height: 52px;

    min-width: 52px;

    padding: 0 16px;
    
    border-radius: 6px;

    display: flex;

    align-items: center;
    justify-content: center;

    gap: 8px;

    
    background: #0f172a;

    border: 1px solid #334155;

    color: #f9fafb;


    cursor: pointer;

    white-space: nowrap;


    transition: all .25s ease;


    box-shadow:
        0 4px 18px ${({theme}) =>
    theme.colors.shadow};



    &:hover {

        transform: translateY(-2px);
        
        border-color: #f9fafb;
        
        box-shadow:
            0 10px 28px ${({theme}) =>
    theme.colors.shadow};
    }


    &:active {
        transform: translateY(0);
    }


    svg {
        flex-shrink: 0;
    }


    @media (max-width: 1200px) {
        padding: 0 14px;
        gap: 6px;
    }


    @media (max-width: 992px) {
        display: none;
    }
`;

export const ButtonTheme = styled(HeaderButton)`
    @media (max-width: 992px) {
        display: flex;
    }
`;

export const CartButton = styled(HeaderButton)`
    position: relative;
    background: ${({theme}) =>
            theme.colors.primary};

    background: #f9fafb;
    color: #111827;
    border-radius: 6px;
    border: none;

    box-shadow:
            0 10px 30px ${({theme}) =>
                    theme.colors.shadow};


    &:hover {
        transform: translateY(-2px);

        box-shadow:
                0 18px 40px ${({theme}) =>
                        theme.colors.shadow};
        color: black;
    }


    @media (max-width: 992px) {
        display: none;
    }
`;
export const CartBadge = styled.div`
    position: absolute;
    top: -7px;
    right: -9px;

    min-width: 18px;
    height: 18px;

    padding: 0 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 999px;

    background: #ef4444;
    color: white;

    font-size: 10px;
    font-weight: 700;
`;

export const HeaderButtonLabel = styled.span`
    font-size: 13px;
    font-weight: 600;
    line-height: 1;

    @media (max-width: 768px) {
        display: none;
    }
`;