import { NavigationButtons } from "@/components";
import { useTranslation } from "react-i18next";
import * as S from "../stylesPages/StylesPages";


export const FaqPage = () => {
    const { t } = useTranslation();


    return (
        <S.InfoPageContainer>

            <S.InfoPageTitle>
                {t("FAQ")}
            </S.InfoPageTitle>


            <S.FaqItem>
                <S.FaqQuestion>
                    {t("How do I place an order?")}
                </S.FaqQuestion>

                <S.FaqAnswer>
                    {t("To place an order, select the products you want, add them to your cart, and proceed to checkout.")}
                </S.FaqAnswer>
            </S.FaqItem>



            <S.FaqItem>
                <S.FaqQuestion>
                    {t("What payment methods are available?")}
                </S.FaqQuestion>

                <S.FaqAnswer>
                    {t("We accept credit cards, PayPal, and cash on delivery (where available).")}
                </S.FaqAnswer>
            </S.FaqItem>



            <S.FaqItem>
                <S.FaqQuestion>
                    {t("How long will delivery take?")}
                </S.FaqQuestion>

                <S.FaqAnswer>
                    {t("Delivery usually takes 3–5 business days depending on your location.")}
                </S.FaqAnswer>
            </S.FaqItem>



            <S.FaqItem>
                <S.FaqQuestion>
                    {t("Can I return a product?")}
                </S.FaqQuestion>

                <S.FaqAnswer>
                    {t("Yes, you can return any product within 14 days, provided it’s in its original condition.")}
                </S.FaqAnswer>
            </S.FaqItem>



            <S.FaqItem>
                <S.FaqQuestion>
                    {t("How can I contact support?")}
                </S.FaqQuestion>

                <S.FaqAnswer>
                    {t("You can reach our support team via the Contact page or by emailing support@shop.com.")}
                </S.FaqAnswer>
            </S.FaqItem>



            <S.InfoNavigation>
                <NavigationButtons />
            </S.InfoNavigation>

        </S.InfoPageContainer>
    );
};