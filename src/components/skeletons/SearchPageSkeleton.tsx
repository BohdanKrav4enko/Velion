import styled from "styled-components";
import { Skeleton } from "@/components";

const Container = styled.div`
    width: 100%;
    max-width: 1600px;

    margin: 0 auto;

    padding: 48px 32px 80px;

    @media (max-width: 768px) {
        padding: 32px 20px 60px;
    }

    @media (max-width: 480px) {
        padding: 24px 16px 40px;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;

    gap: 12px;

    margin-bottom: 48px;

    padding-bottom: 24px;

    border-bottom: 1px solid #ececec;
`;

const Layout = styled.div`
    display: grid;
    grid-template-columns: 280px 1fr;

    gap: 48px;

    align-items: start;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 28px;
    }
`;

const Filters = styled.div`
    display: flex;
    flex-direction: column;

    gap: 20px;

    @media (max-width: 900px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        gap: 16px;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const FilterCard = styled.div`
    display: flex;
    flex-direction: column;

    gap: 16px;

    padding: 24px;

    background: white;

    border: 1px solid #ececec;
    border-radius: 12px;
`;

const ProductsGrid = styled.div`
    display: grid;

    grid-template-columns: repeat(4, minmax(0, 1fr));

    gap: 20px;

    @media (max-width: 1400px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 520px) {
        grid-template-columns: 1fr;
    }
`;

const ProductCard = styled.article`
    display: flex;
    flex-direction: column;

    padding: 10px;

    background: white;

    border-radius: 6px;
`;

const ImageWrapper = styled.div`
    width: 100%;

    aspect-ratio: 1;

    overflow: hidden;

    border-radius: 6px;

    margin-bottom: 10px;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;

    gap: 6px;

    min-height: 38px;
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 12px;
`;

interface SearchPageSkeletonProps {
    count?: number;
}

export const SearchPageSkeleton = ({
                                       count = 12,
                                   }: SearchPageSkeletonProps) => {
    return (
        <Container>

            <Header>
                <Skeleton width="320px" height="54px" />

                <Skeleton width="240px" height="24px" />

                <Skeleton width="180px" height="18px" />
            </Header>

            <Layout>

                <Filters>

                    <FilterCard>
                        <Skeleton width="120px" height="24px" />

                        <Skeleton width="100%" height="20px" />
                        <Skeleton width="85%" height="20px" />
                        <Skeleton width="95%" height="20px" />
                        <Skeleton width="75%" height="20px" />
                    </FilterCard>

                    <FilterCard>
                        <Skeleton width="100px" height="24px" />

                        <Skeleton width="100%" height="44px" />
                        <Skeleton width="100%" height="44px" />
                    </FilterCard>

                </Filters>

                <ProductsGrid>

                    {Array.from({ length: count }).map((_, index) => (
                        <ProductCard key={index}>

                            <ImageWrapper>
                                <Skeleton
                                    width="100%"
                                    height="100%"
                                />
                            </ImageWrapper>

                            <ProductInfo>
                                <Skeleton
                                    width="100%"
                                    height="16px"
                                />

                                <Skeleton
                                    width="70%"
                                    height="16px"
                                />
                            </ProductInfo>

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

                        </ProductCard>
                    ))}

                </ProductsGrid>

            </Layout>

        </Container>
    );
};