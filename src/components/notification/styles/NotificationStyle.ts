import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

const slideOut = keyframes`
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(20px);
        opacity: 0;
    }
`;

export const AlertWrapper = styled.div<{
    leaving: boolean;
    type: "success" | "error" | "info";
}>`
    position: fixed;
    left: 24px;
    bottom: 24px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    min-width: 320px;
    max-width: 420px;

    padding: 16px 20px;

    border-radius: 18px;
    border: 1px solid
    ${({ type }) =>
            type === "success"
                    ? "rgba(34, 197, 94, .25)"
                    : type === "error"
                            ? "rgba(239, 68, 68, .25)"
                            : "rgba(59, 130, 246, .25)"};

    background: ${({ theme }) => theme.colors.surface};

    color: ${({ theme }) => theme.colors.text};

    box-shadow:
            0 12px 40px ${({ theme }) => theme.colors.shadow};

    backdrop-filter: blur(12px);

    z-index: 9999;

    animation:
            ${({ leaving }) => (leaving ? slideOut : slideIn)}
            .25s ease forwards;

    &::before {
        content: "";

        width: 4px;
        align-self: stretch;

        border-radius: 999px;

        background:
                ${({ type }) =>
                        type === "success"
                                ? "#22c55e"
                                : type === "error"
                                        ? "#ef4444"
                                        : "#3b82f6"};
    }

    @media (max-width: 768px) {
        left: 12px;
        right: 12px;
        bottom: 12px;

        min-width: auto;
        max-width: none;
        width: auto;

        padding: 14px 16px;
        border-radius: 16px;
    }
`;

export const CloseNotificationButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    flex-shrink: 0;

    border: none;
    border-radius: 10px;

    background: transparent;

    color: ${({ theme }) => theme.colors.textSecondary};

    cursor: pointer;

    transition: .15s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.surfaceSecondary};
        color: ${({ theme }) => theme.colors.text};
    }
`;