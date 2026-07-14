import styled from "styled-components";
import { Skeleton } from "./Skeleton";

const Grid = styled.div`
    display: grid;

    grid-template-columns: repeat(6, minmax(0, 1fr));
    margin-top: 50px;
    gap: 12px;

    width: 100%;

    @media (max-width: 1400px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

const Card = styled.article`
    display: flex;
    flex-direction: column;

    padding: 10px;

    background: white;

    border-radius: 6px;

    min-width: 0;
`;

const ImageWrapper = styled.div`
    width: 100%;

    aspect-ratio: 1;

    margin-bottom: 10px;

    overflow: hidden;

    border-radius: 6px;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;

    gap: 6px;

    min-height: 38px;
`;

const Footer = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;

    margin-top: 10px;
`;

interface Props {
    count?: number;
}

export const ProductSkeletonGrid = ({
                                        count = 12,
                                    }: Props) => {
    return (
        <Grid>
            {Array.from({ length: count }).map((_, index) => (
                <Card key={index}>

                    <ImageWrapper>
                        <Skeleton
                            width="100%"
                            height="100%"
                        />
                    </ImageWrapper>

                    <Title>
                        <Skeleton
                            width="100%"
                            height="16px"
                        />

                        <Skeleton
                            width="70%"
                            height="16px"
                        />
                    </Title>

                    <Footer>

                        <Skeleton
                            width="80px"
                            height="28px"
                        />

                        <Skeleton
                            width="38px"
                            height="38px"
                        />

                    </Footer>

                </Card>
            ))}
        </Grid>
    );
};