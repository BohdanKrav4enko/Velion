import {useTranslation} from "react-i18next";
import {NavigationButtons} from "@/components";
import * as S from "../stylesPages/StylesPages";


export const AboutPage = () => {
    const {t} = useTranslation();


    return (
        <S.InfoPageContainer>

            <S.InfoPageTitle>
                {t("About Us")}
            </S.InfoPageTitle>



            <S.InfoBlock>
                <S.InfoBlockTitle>
                    {t("Our Mission")}
                </S.InfoBlockTitle>

                <S.InfoBlockText>
                    {t("SHOP is dedicated to providing high-quality products at affordable prices. We aim to create a seamless and enjoyable shopping experience for all our customers.")}
                </S.InfoBlockText>
            </S.InfoBlock>



            <S.InfoBlock>
                <S.InfoBlockTitle>
                    {t("Our Story")}
                </S.InfoBlockTitle>

                <S.InfoBlockText>
                    {t("Founded in 2025, SHOP started as a small online store and has grown into a trusted platform for a variety of products. We value quality, trust, and customer satisfaction.")}
                </S.InfoBlockText>
            </S.InfoBlock>



            <S.InfoBlock>
                <S.InfoBlockTitle>
                    {t("Why Choose Us")}
                </S.InfoBlockTitle>

                <S.InfoBlockText>
                    {t("With fast shipping, responsive support, and a wide range of products, SHOP is the trusted choice for customers who value reliability.")}
                </S.InfoBlockText>
            </S.InfoBlock>



            <S.InfoBlock>
                <S.InfoBlockTitle>
                    {t("Looking Ahead")}
                </S.InfoBlockTitle>

                <S.InfoBlockText>
                    {t("We continue to expand our selection and improve our services to offer the best online shopping experience possible.")}
                </S.InfoBlockText>
            </S.InfoBlock>



            <S.InfoBlock>
                <S.InfoBlockTitle>
                    {t("Our Values")}
                </S.InfoBlockTitle>

                <S.InfoBlockText>
                    {t("We prioritize customer satisfaction, honesty, and quality. Every product is carefully selected to meet our high standards.")}
                </S.InfoBlockText>
            </S.InfoBlock>



            <S.InfoNavigation>
                <NavigationButtons/>
            </S.InfoNavigation>

        </S.InfoPageContainer>
    );
};