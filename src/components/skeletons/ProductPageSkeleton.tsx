import {Skeleton} from "./Skeleton";
import styled from "styled-components";


const Container = styled.div`
    max-width: 1400px;

    margin: 0 auto;

    padding: 120px 20px 80px;


    @media (max-width: 768px) {
        padding: 80px 20px 60px;
    }
`;


const BreadcrumbSkeleton = styled.div`
    margin-bottom: 40px;
`;


const Layout = styled.div`
    display: grid;

    grid-template-columns: 1fr 520px;

    gap: 60px;


    @media (max-width: 1100px) {
        grid-template-columns: 1fr;

        gap: 40px;
    }
`;


const Gallery = styled.div`
    width: 100%;
`;


const Info = styled.div`
    display: flex;

    flex-direction: column;

    gap: 28px;
`;


const MetaBox = styled.div`
    display: flex;

    flex-direction: column;

    gap: 18px;

    padding: 32px;


    background: ${({theme}) => theme.colors.surface};


    border: 1px solid ${({theme}) => theme.colors.border};

    border-radius: 6px;
`;


const Actions = styled.div`
    display: flex;

    gap: 16px;
`;


const Description = styled.div`
    display: flex;

    flex-direction: column;

    gap: 20px;

    margin-top: 60px;

    padding: 40px;


    background: ${({theme}) => theme.colors.surface};


    border: 1px solid ${({theme}) => theme.colors.border};

    border-radius: 6px;


    @media (max-width: 768px) {
        margin-top: 40px;

        padding: 24px;
    }
`;


export const ProductPageSkeleton = () => {
    return (
        <Container>


            <BreadcrumbSkeleton>

                <Skeleton
                    width="220px"
                    height="20px"
                />

            </BreadcrumbSkeleton>



            <Layout>


                <Gallery>

                    <Skeleton
                        width="100%"
                        height="650px"
                    />

                </Gallery>



                <Info>


                    <Skeleton
                        width="85%"
                        height="52px"
                    />



                    <Skeleton
                        width="160px"
                        height="44px"
                    />



                    <MetaBox>


                        <Skeleton
                            width="80px"
                            height="16px"
                        />



                        <Skeleton
                            width="220px"
                            height="55px"
                        />



                        <Skeleton
                            width="180px"
                            height="20px"
                        />



                        <Skeleton
                            width="150px"
                            height="36px"
                        />


                    </MetaBox>



                    <Actions>

                        <Skeleton
                            width="100%"
                            height="64px"
                        />



                        <Skeleton
                            width="64px"
                            height="64px"
                        />

                    </Actions>



                    <Actions>

                        <Skeleton
                            width="100%"
                            height="56px"
                        />



                        <Skeleton
                            width="100%"
                            height="56px"
                        />

                    </Actions>


                </Info>


            </Layout>




            <Description>


                <Skeleton
                    width="220px"
                    height="32px"
                />



                <Skeleton
                    width="100%"
                    height="22px"
                />



                <Skeleton
                    width="95%"
                    height="22px"
                />



                <Skeleton
                    width="80%"
                    height="22px"
                />


            </Description>


        </Container>
    );
};