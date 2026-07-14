import styled from "styled-components";

export const Container = styled.div`
    position: relative;
`;

export const Button = styled.button`
    height: 52px;
    padding: 0 18px;

    display: flex;
    align-items: center;
    gap: 10px;

    background: rgba(255,255,255,.92);

    border: 1px solid #ececec;
    border-radius: 6px;

    color: #374151;

    cursor: pointer;

    transition: all .25s ease;

    box-shadow:
        0 4px 18px rgba(0,0,0,.04);

    white-space: nowrap;

    font-size: 14px;
    font-weight: 600;

    &:hover {
        transform: translateY(-2px);

        border-color: #d1d5db;

        box-shadow:
            0 10px 28px rgba(0,0,0,.08);
    }

    svg:last-child {
        transition: .25s;
    }

    @media (max-width: 768px) {
        width: 52px;
        padding: 0;

        justify-content: center;

        span {
            display: none;
        }

        svg:last-child {
            display: none;
        }
    }
`;

export const Dropdown = styled.div`
    position: absolute;

    top: calc(100% + 12px);
    left: 0;

    width: 280px;

    padding: 12px;

    display: flex;
    flex-direction: column;
    gap: 6px;

    background: rgba(255,255,255,.98);

    backdrop-filter: blur(20px);

    border: 1px solid #ececec;
    border-radius: 6px;

    box-shadow:
        0 20px 50px rgba(0,0,0,.12);

    z-index: 1001;

    animation: dropdown .2s ease;

    @keyframes dropdown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        width: 260px;
    }

    @media (max-width: 480px) {
        width: calc(100vw - 32px);
        left: -8px;
    }
`;

export const CategoryItem = styled.button`
    width: 100%;
    min-height: 48px;

    padding: 0 16px;

    display: flex;
    align-items: center;

    background: transparent;

    border: none;
    border-radius: 6px;

    text-align: left;

    font-size: 14px;
    font-weight: 500;

    color: #374151;

    cursor: pointer;

    transition: all .15s ease;

    &:hover {
        background: #f9fafb;

        color: #111827;

        transform: translateX(4px);
    }
`;