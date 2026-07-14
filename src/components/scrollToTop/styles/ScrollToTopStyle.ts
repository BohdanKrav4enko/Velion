import styled, { css } from "styled-components";

export const ArrowButton = styled.button<{
    visible: boolean;
}>`
    position: fixed;

    right: 32px;
    bottom: 32px;

    width: 58px;
    height: 58px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #334155;
    border-radius: 6px;

    background: #1f2937;

    color: #f9fafb;

    font-size: 28px;
    font-weight: 700;

    cursor: pointer;

    z-index: 999;

    box-shadow:
            0 10px 30px rgba(0, 0, 0, .35);

    transition:
            opacity .25s ease,
            transform .25s ease,
            background .25s ease,
            box-shadow .25s ease;

    ${({ visible }) =>
            visible
                    ? css`
                        opacity: 1;
                        visibility: visible;
                        transform: translateY(0) scale(1);
                    `
                    : css`
                        opacity: 0;
                        visibility: hidden;
                        transform: translateY(20px) scale(.9);
                        pointer-events: none;
                    `}

    &:hover {
        background: #334155;

        transform: translateY(-4px);

        box-shadow:
                0 18px 40px rgba(0, 0, 0, .45);
    }

    &:active {
        transform: translateY(-1px) scale(.96);
    }

    @media (max-width: 768px) {
        width: 52px;
        height: 52px;

        right: 20px;
        bottom: 20px;

        font-size: 24px;
    }

    @media (max-width: 480px) {
        width: 48px;
        height: 48px;

        right: 16px;
        bottom: 16px;

        font-size: 22px;
    }
`;