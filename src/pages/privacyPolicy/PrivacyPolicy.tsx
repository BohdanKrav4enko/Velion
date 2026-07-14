import {NavigationButtons} from "@/components";
import {useTranslation} from "react-i18next";
import * as S from "../stylesPages/StylesPages";


export const PrivacyPage = () => {
    const {t} = useTranslation();


    return (
        <S.InfoPageContainer>

            <S.InfoPageTitle>
                {t("Privacy Policy")}
            </S.InfoPageTitle>


            <S.InfoBlock>
                <S.InfoBlockTitle>
                    {t("Information Collection")}
                </S.InfoBlockTitle>

                <S.InfoBlockText>
                    {t("We respect your privacy. Any personal information collected on this website, such as email or order details, is used only to process orders and improve your shopping experience.")}
                </S.InfoBlockText>
            </S.InfoBlock>


            <S.InfoNavigation>
                <NavigationButtons/>
            </S.InfoNavigation>

        </S.InfoPageContainer>
    );
};