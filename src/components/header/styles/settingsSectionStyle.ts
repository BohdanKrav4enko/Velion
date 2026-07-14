import styled from "styled-components";

export const DropdownWrapper = styled.div`
    position: relative;

    display: flex;
    align-items: center;
`;


export const DropdownButton = styled.button`
    height: 52px;

    padding: 0 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;
    

    backdrop-filter: blur(16px);
    
    background: #0f172a;
    
    border: 1px solid #334155;

    color: #f9fafb;
    
    border-radius: 6px;

    
    
    font-size: 14px;
    font-weight: 600;

   

    cursor: pointer;

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


    @media (max-width: 768px) {
        height: 52px;
        padding: 0 12px;
    }
`;


export const DropdownList = styled.ul<{ open: boolean }>`
    position: absolute;

    top: calc(100% + 10px);
    left: 50%;

    transform: ${({ open }) =>
            open
                    ? "translateX(-50%) translateY(0)"
                    : "translateX(-50%) translateY(-10px)"};


    width: 140px;

    padding: 8px;
    margin: 0;

    list-style: none;


    backdrop-filter: blur(24px);


    background: #0f172a;

    border: 1px solid #334155;
    


    border-radius: 6px;


    box-shadow:
            0 20px 50px ${({theme}) =>
                    theme.colors.shadow};


    opacity: ${({open}) =>
            open ? 1 : 0};

    visibility: ${({open}) =>
            open ? "visible" : "hidden"};


    transition:
            opacity .25s ease,
            transform .25s ease,
            visibility .25s ease;


    z-index: 1000;
`;


export const DropdownItem = styled.li`
    height: 42px;


    display: flex;

    align-items: center;

    gap: 10px;


    padding: 0 12px;


    border-radius: 6px;


    font-size: 14px;

    font-weight: 600;


    color: #f9fafb;


    cursor: pointer;


    transition: all .2s ease;


    &:hover {

        background: #1f2937;


        color: white;


        transform: translateX(2px);
    }
`;