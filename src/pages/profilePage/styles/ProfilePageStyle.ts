import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 100%;
    max-width: 1100px;

    margin: 0 auto;

    padding: 48px 24px 80px;

    @media (max-width: 768px) {
        padding: 32px 20px 60px;
    }

    @media (max-width: 480px) {
        padding: 24px 16px 40px;
    }
`;
export const ProfileActionsContainer = styled.div`
    display: flex;

    gap: 12px;

    margin: 28px 0;

    width: 100%;

    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
export const ProfileActionButton = styled.button`
    flex-grow: 1;
    flex-shrink: 0;

    min-width: 180px;

    height: 52px;

    padding: 0 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    border: none;
    border-radius: 6px;

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};

    font-size: 15px;
    font-weight: 700;

    cursor: pointer;

    transition: .2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 28px ${({ theme }) => theme.colors.shadow};
    }

    @media (max-width: 768px) {
        width: 100%;
        min-width: unset;
    }
`;
export const ProfileField = styled.div`
    display: grid;
    grid-template-columns: 180px 1fr;

    align-items: center;

    min-height: 92px;

    padding: 20px 0;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    @media (max-width: 768px) {
        grid-template-columns: 1fr;

        gap: 12px;

        padding: 18px 0;
    }
`;
export const ProfileFieldTitle = styled.div`
    font-size: 14px;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.textSecondary};

    text-transform: uppercase;
    letter-spacing: .8px;
`;
export const ProfileValue = styled.div`
    min-height: 48px;

    display: flex;
    align-items: center;

    font-size: 16px;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.text};

    gap: 10px;

    svg {
        flex-shrink: 0;
        color: ${({ theme }) => theme.colors.textSecondary};
    }
`;
export const AboutMeInput = styled.input`
    width: 100%;
    max-width: 520px;

    height: 48px;

    padding: 0 16px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    background: ${({ theme }) => theme.colors.surface};

    font-size: 15px;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.text};

    transition:
        border-color .15s ease,
        box-shadow .15s ease;

    &:focus {
        outline: none;

        border-color: ${({ theme }) => theme.colors.primary};

        box-shadow:
            0 0 0 3px ${({ theme }) => theme.colors.shadow};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.textMuted};
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;
export const StyleMeError = styled.p`
    margin: 8px 0 0;

    font-size: 13px;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.danger};
`;
export const ProfileButtonsContainer = styled.div`
    display: flex;
    gap: 12px;
    
    margin-top: 40px;

    button{
        flex-grow: 1;
        flex-shrink: 0;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
export const ProfileButton = styled.button`
    min-width: 160px;
    height: 48px;

    padding: 0 22px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.background};

    border: 0.5px solid ${({ theme }) => theme.colors.primary};
    border-radius: 6px;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    transition: .2s ease;
    svg {
        width: 17px;
        height: 17px;

        flex-shrink: 0;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 28px ${({ theme }) => theme.colors.shadow};
    }

    &:disabled {
        opacity: .55;
        cursor: not-allowed;
    }

    @media (max-width: 768px) {
        width: 100%;
        min-width: unset;
    }
`;
export const ProfileSecondaryButton = styled.button`
    min-width: 140px;
    height: 48px;

    padding: 0 22px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background: ${({ theme }) => theme.colors.surface};

    color: ${({ theme }) => theme.colors.text};

    border: 0.5px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    transition: .2s ease;
    
    svg {
        width: 17px;
        height: 17px;

        flex-shrink: 0;
    }

    &:hover {
        transform: translateY(-2px);
        background: ${({ theme }) => theme.colors.surfaceSecondary};
        border-color: ${({ theme }) => theme.colors.textMuted};
    }

    @media (max-width: 768px) {
        width: 100%;
        min-width: unset;
    }
`;
export const ProfileLogOutButton = styled.button`
    min-width: 140px;
    height: 48px;

    padding: 0 22px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background: ${({ theme }) => theme.colors.surface};

    color: ${({ theme }) => theme.colors.danger};

    border: 0.5px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    transition: .2s ease;

    svg {
        width: 17px;
        height: 17px;

        flex-shrink: 0;
    }

    &:hover {
        transform: translateY(-2px);
        background: ${({ theme }) => theme.colors.surfaceSecondary};
        border-color: ${({ theme }) => theme.colors.danger};
    }

    @media (max-width: 768px) {
        width: 100%;
        min-width: unset;
    }
`;
export const ProfileHeader = styled.div`
    display: flex;
    align-items: center;

    gap: 24px;

    margin-bottom: 40px;

    @media (max-width: 768px) {
        flex-direction: row;
        align-items: center;

        gap: 16px;
    }
`;

type ProfileAvatar = {
    width: number;
    height: number;
    fontSize?: number;
    fontWeight?: number;
    backgroundColor?: string;
    color?: string;
}

export const ProfileAvatar = styled.div<ProfileAvatar>`
    width: ${(props => props.width)}px;
    height: ${(props => props.height)}px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: ${({ backgroundColor, theme }) =>
            backgroundColor ?? theme.colors.primary};
    color: ${({ theme, color }) => color ?? theme.colors.background};

    font-size: ${(props) => props.fontSize || 34}px;
    font-weight: ${(props) => props.fontWeight || 800};

    letter-spacing: -1px;
    
`;
export const ProfileHeaderContent = styled.div`
    display: flex;
    flex-direction: column;

    gap: 6px;

    min-width: 0;
`;
export const ProfileUserName = styled.h1`
    margin: 0;

    font-size: 32px;
    font-weight: 800;

    line-height: 1.1;

    letter-spacing: -1px;

    color: ${({ theme }) => theme.colors.text};

    @media (max-width: 768px) {
        font-size: 26px;
    }
`;
export const ProfileEmail = styled.p`
    margin: 0;

    font-size: 15px;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.textSecondary};
`;
export const ProfilePageLabel = styled.span`
    margin-top: 8px;

    display: flex;
    align-items: center;
    gap: 6px;

    width: fit-content;

    padding: 6px 12px;

    border-radius: 999px;

    background: ${({ theme }) => theme.colors.surfaceSecondary};

    color: ${({ theme }) => theme.colors.textSecondary};

    font-size: 12px;
    font-weight: 700;

    text-transform: uppercase;
    letter-spacing: .8px;

    img {
    }
`;
export const ProfileCard = styled.div`
    padding: 12px 28px;

    background: ${({ theme }) => theme.colors.surface};

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 12px;

    margin-bottom: 32px;

    @media (max-width: 768px) {
        padding: 8px 20px;
    }

    @media (max-width: 480px) {
        padding: 6px 16px;
    }
`;
export const AdminSection = styled.section`
    margin: 36px 0;
`;
export const AdminTitle = styled.h2`
    margin: 0 0 18px;

    font-size: 18px;
    font-weight: 800;

    color: ${({ theme }) => theme.colors.text};

    letter-spacing: -.5px;
`;