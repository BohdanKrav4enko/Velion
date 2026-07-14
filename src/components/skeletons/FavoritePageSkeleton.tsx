import {Skeleton} from "./Skeleton";
import styled from "styled-components";


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

    justify-content: space-between;

    align-items: flex-end;

    gap: 24px;

    margin-bottom: 48px;


    @media (max-width: 900px) {
        flex-direction: column;

        align-items: flex-start;
    }
`;


const HeaderLeft = styled.div`
    display: flex;

    flex-direction: column;

    gap: 12px;
`;


const Actions = styled.div`
    display: flex;

    gap: 12px;


    @media (max-width: 768px) {
        width: 100%;
    }


    @media (max-width: 500px) {
        flex-direction: column;
    }
`;


const ProductsGrid = styled.div`
    display: grid;

    grid-template-columns:
        repeat(auto-fill, minmax(280px, 1fr));

    gap: 24px;


    @media (max-width: 768px) {
        grid-template-columns:
            repeat(2, 1fr);

        gap: 16px;
    }


    @media (max-width: 520px) {
        grid-template-columns: 1fr;
    }
`;


const Card = styled.div`
    background: ${({theme}) => theme.colors.surface};


    border: 1px solid ${({theme}) => theme.colors.border};

    border-radius: 8px;

    overflow: hidden;
`;


const ImageWrapper = styled.div`
    width: 100%;

    aspect-ratio: 1;

    padding: 24px;


    background: ${({theme}) => theme.colors.surfaceSecondary};
`;


const Content = styled.div`
    padding: 18px;
`;


const SkeletonLine = styled.div`
    margin-top: 8px;
`;


const Footer = styled.div`
    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 12px;

    margin-top: 18px;
`;


interface Props {
    count?: number;
}


export const FavoritePageSkeleton = ({
                                         count = 8,
                                     }: Props) => {
    return (
        <Container>


            <Header>

                <HeaderLeft>

                    <Skeleton
                        width="240px"
                        height="58px"
                    />


                    <Skeleton
                        width="140px"
                        height="22px"
                    />

                </HeaderLeft>



                <Actions>

                    <Skeleton
                        width="120px"
                        height="46px"
                    />

                </Actions>


            </Header>




            <ProductsGrid>

                {Array.from({length: count}).map((_, index) => (

                    <Card key={index}>


                        <ImageWrapper>

                            <Skeleton
                                width="100%"
                                height="100%"
                            />

                        </ImageWrapper>




                        <Content>


                            <Skeleton
                                width="100%"
                                height="18px"
                            />



                            <SkeletonLine>

                                <Skeleton
                                    width="75%"
                                    height="18px"
                                />

                            </SkeletonLine>




                            <Footer>


                                <Skeleton
                                    width="90px"
                                    height="32px"
                                />


                                <Skeleton
                                    width="48px"
                                    height="48px"
                                />


                            </Footer>


                        </Content>


                    </Card>

                ))}


            </ProductsGrid>


        </Container>
    );
};