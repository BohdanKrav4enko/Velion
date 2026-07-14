import styled from "styled-components";
import { Skeleton } from "@/components";

const Wrapper = styled.div`
    display: flex;

    justify-content: center;

    align-items: center;

    height: 22px;

    margin-bottom: 12px;
`;


export const GreetingsSkeleton = () => {
    return (
        <Wrapper>
            <Skeleton
                width="240px"
                height="30px"
            />
        </Wrapper>
    );
};