import styled from "styled-components";

export const Container = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    height: 72px;

    display: none;
    align-items: center;
    justify-content: space-around;

    background: rgba(18, 18, 18, 0.92);
    backdrop-filter: blur(20px);

    border-top: 1px solid rgba(255, 255, 255, 0.08);

    z-index: 1000;

    @media (max-width: 1024px) {
        display: flex;
    }
`;

export const Item = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    background: transparent;
    border: none;
    color: #d1d5db;

    cursor: pointer;
    transition: .2s;

    span {
        font-size: 11px;
        font-weight: 500;
    }

    &:hover {
        color: #4f46e5;
        transform: translateY(-2px);
    }
`;

export const IconWrapper = styled.div`
    position: relative;
`;

export const Badge = styled.div`
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