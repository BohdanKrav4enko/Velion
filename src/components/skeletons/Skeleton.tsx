import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
    0% {
        background-position: -500px 0;
    }

    100% {
        background-position: 500px 0;
    }
`;

const SkeletonWrapper = styled.div<{
    width?: string;
    height?: string;
}>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "20px"};

    border-radius: 6px;

    background: linear-gradient(
        90deg,
        #eeeeee 25%,
        #f7f7f7 37%,
        #eeeeee 63%
    );

    background-size: 1000px 100%;

    animation: ${shimmer} 1.6s infinite linear;

    overflow: hidden;
`;

interface SkeletonProps {
    width?: string;
    height?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
                                                      width,
                                                      height
                                                  }) => {
    return (
        <SkeletonWrapper
            width={width}
            height={height}
        />
    );
};