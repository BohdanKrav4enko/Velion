import styled from "styled-components";
import {Link} from "react-router-dom";


export const FooterContainer = styled.footer`
    margin-top: 100px;

    padding: 70px 20px 30px;

    background: #111827;

    border-top: 1px solid #334155;
`;



export const ColumnTitle = styled.h3`
    margin: 0 0 10px;

    font-size: 13px;

    font-weight: 800;

    text-transform: uppercase;

    letter-spacing: .8px;

    color: #f9fafb;
`;


export const FooterLink = styled(Link)`
    color: #cbd5e1;

    font-size: 15px;

    font-weight: 400;

    text-decoration: none;

    transition: .2s ease;


    &:hover {
        color: #f9fafb;

        transform: translateX(3px);
    }
`;


export const FooterButton = styled.button`
    padding: 0;

    border: none;

    background: transparent;

    color: #cbd5e1;

    font-size: 15px;

    font-family: inherit;

    text-align: left;

    cursor: pointer;

    transition: .2s ease;


    &:hover {
        color: #f9fafb;

        transform: translateX(3px);
    }
`;



export const Logo = styled.h2`
    margin: 0 0 14px;

    font-size: 38px;

    font-weight: 900;

    letter-spacing: -2px;

    color: #f9fafb;
`;



export const Description = styled.p`
    margin: 0;

    max-width: 300px;

    font-size: 14px;

    line-height: 1.7;

    color: #94a3b8;



    @media(max-width:768px) {
        max-width: 100%;
    }
`;



export const FooterBottom = styled.div`
    max-width: 1400px;

    margin: 50px auto 0;

    padding-top: 24px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    border-top: 1px solid #334155;



    @media(max-width:768px) {
        flex-direction: column;

        gap: 8px;

        text-align: center;
    }
`;



export const Copyright = styled.p`
    margin: 0;

    font-size: 13px;

    font-weight: 600;

    color: #94a3b8;
`;


export const BottomText = styled.p`
    margin: 0;

    font-size: 13px;

    color: #94a3b8;
`;

export const FooterGrid = styled.div`
    max-width: 1400px;

    margin: 0 auto;


    display: grid;

    grid-template-columns: 2fr repeat(4, 1fr);


    gap: 40px;



    @media (max-width: 1100px) {
        grid-template-columns: 2fr repeat(2, 1fr);
    }



    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);

        gap: 35px 20px;
    }
    
    @media (max-width: 480px) {
        grid-template-columns: 1fr 1fr;

        gap: 32px 16px;
    }
`;
export const FooterColumn = styled.div`
    display: flex;

    flex-direction: column;

    gap: 12px;
`;

export const FooterBrand = styled.div`
    max-width: 320px;



    @media(max-width:768px) {
        grid-column: 1 / -1;

        max-width: 100%;
    }
`;