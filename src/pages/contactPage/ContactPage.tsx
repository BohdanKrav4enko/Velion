import {NavigationButtons} from "@/components";
import {MapComponent} from "@/components";
import {useTranslation} from "react-i18next";
import * as S from "../stylesPages/StylesPages";


export const ContactPage = () => {
    const {t} = useTranslation();


    return (
        <S.InfoPageContainer>

            <S.InfoPageTitle>
                {t("Contact Us")}
            </S.InfoPageTitle>



            <S.InfoBlock>
                <S.InfoBlockTitle>
                    {t("Email")}
                </S.InfoBlockTitle>

                <S.InfoBlockText>
                    bohdan.krav4enko@gmail.com
                </S.InfoBlockText>
            </S.InfoBlock>



            <S.InfoBlock>
                <S.InfoBlockTitle>
                    {t("Phone")}
                </S.InfoBlockTitle>

                <S.InfoBlockText>
                    +380 (66) 082-7985
                </S.InfoBlockText>
            </S.InfoBlock>



            <S.InfoBlock>
                <S.InfoBlockTitle>
                    {t("Address")}
                </S.InfoBlockTitle>

                <S.InfoBlockText>
                    Velion Store, Mykolaiv, Ukraine
                </S.InfoBlockText>
            </S.InfoBlock>



            <S.InfoBlock>
                <MapComponent/>
            </S.InfoBlock>



            <S.InfoNavigation>
                <NavigationButtons/>
            </S.InfoNavigation>

        </S.InfoPageContainer>
    );
};