import { Skeleton } from "@/components";
import styled from "styled-components";


const Wrapper = styled.div`
    position: relative;

    flex: 1;

    width: 100%;

    max-width: 650px;

    margin: 0 auto;


    @media(max-width:1200px){
        max-width:520px;
    }


    @media(max-width:992px){
        order:3;

        max-width:none;

        width:100%;
    }
`;


export const SearchBarSkeleton = () => {
    return (
        <Wrapper>

            <Skeleton
                width="100%"
                height="52px"
            />

        </Wrapper>
    );
};