import styled from "styled-components";
import {Link} from "react-router-dom";


export const SearchContainer = styled.div`
    position: relative;

    flex: 1;
    width: 100%;
    max-width: 650px;

    margin: 0 auto;

    @media (max-width: 1200px) {
        max-width: 520px;
    }

    @media (max-width: 992px) {
        grid-column: 1 / -1;
        order: 3;
        max-width: none;
        margin-top: 4px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;


export const SearchIcon = styled.div`
    position: absolute;

    left: 16px;
    top: 50%;

    transform: translateY(-50%);

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({theme}) => theme.colors.textMuted};

    pointer-events: none;

    z-index: 2;
`;


export const SearchInput = styled.input`
    width: 100%;
    height: 52px;

    padding: 0 18px 0 48px;

    background: ${({theme}) => theme.colors.surface};

    border: 1px solid ${({theme}) => theme.colors.border};

    border-radius: 6px;

    font-size: 15px;
    font-weight: 500;

    color: ${({theme}) => theme.colors.text};

    transition:
        border-color .15s ease,
        box-shadow .15s ease;


    &:focus {
        outline: none;

        border-color: ${({theme}) => theme.colors.primary};

        box-shadow:
            0 0 0 3px ${({theme}) => theme.colors.shadow};
    }


    &::placeholder {
        color: ${({theme}) => theme.colors.textMuted};
    }
`;


export const Results = styled.div`
    position: absolute;

    top: calc(100% + 8px);
    left: 0;
    right: 0;

    z-index: 1000;

    background: ${({theme}) => theme.colors.surface};

    border: 1px solid ${({theme}) => theme.colors.border};

    border-radius: 6px;

    overflow: hidden;

    box-shadow:
            0 12px 40px ${({theme}) => theme.colors.shadow};

    max-height: 560px;

    overflow-y: auto;


    @media (max-width: 768px) {
        position: fixed;

        top: 128px;

        left: 12px;
        right: 12px;

        max-height: calc(100vh - 160px);
    }
`;


export const SearchItemContainer = styled.div`
    padding: 6px 10px;

    transition: .15s;


    &:hover {
        background: ${({theme}) => theme.colors.surfaceSecondary};
    }
`;


export const ProductLink = styled(Link)`
    display: flex;

    align-items: center;

    gap: 16px;

    padding: 10px;

    border-radius: 8px;

    text-decoration: none;

    transition: .15s;


    &:hover {
        background: ${({theme}) => theme.colors.surfaceSecondary};

        box-shadow:
                0 4px 16px ${({theme}) => theme.colors.shadow};
    }
`;


export const ProductImage = styled.img`
    width: 78px;
    height: 78px;

    object-fit: contain;

    flex-shrink: 0;

    background: ${({theme}) => theme.colors.background};

    border: 1px solid ${({theme}) => theme.colors.border};

    border-radius: 8px;

    padding: 8px;
`;


export const ProductTitle = styled.div`
    font-size: 15px;

    font-weight: 700;

    color: ${({theme}) => theme.colors.text};

    line-height: 1.4;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;


export const ProductCategory = styled.div`
    font-size: 13px;

    font-weight: 500;

    color: ${({theme}) => theme.colors.textMuted};

    text-transform: uppercase;

    letter-spacing: .5px;
`;


export const ProductPrice = styled.div`
    flex-shrink: 0;

    font-size: 22px;

    font-weight: 800;

    color: ${({theme}) => theme.colors.text};

    letter-spacing: -1px;

    white-space: nowrap;
`;

export const ProductContent = styled.div`
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;

    min-width: 0;
`;

export const ProductInfo = styled.div`
    min-width: 0;

    display: flex;
    flex-direction: column;

    gap: 8px;
`;

export const ViewAllButton = styled.button`
    width: 100%;

    height: 56px;

    display: flex;

    align-items: center;

    justify-content: center;


    background: ${({theme}) => theme.colors.surface};


    border: none;

    border-top: 1px solid ${({theme}) => theme.colors.border};


    font-size: 14px;

    font-weight: 700;


    color: ${({theme}) => theme.colors.text};


    cursor: pointer;


    transition: .15s;


    &:hover {
        background: ${({theme}) => theme.colors.surfaceSecondary};
    }
`;