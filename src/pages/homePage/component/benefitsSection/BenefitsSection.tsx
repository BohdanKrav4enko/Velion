import { Truck, ShieldCheck, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

import * as S from "./BenefitsSectionStyle";


export const BenefitsSection = () => {

    const {t} = useTranslation();


    return (
        <S.Container>

            <S.Item>
                <Truck/>
                <div>
                    <h3>{t("Fast delivery")}</h3>
                    <p>{t("Quick and reliable shipping")}</p>
                </div>
            </S.Item>


            <S.Item>
                <ShieldCheck/>
                <div>
                    <h3>{t("Secure payment")}</h3>
                    <p>{t("Your data is protected")}</p>
                </div>
            </S.Item>


            <S.Item>
                <Star/>
                <div>
                    <h3>{t("Quality products")}</h3>
                    <p>{t("Trusted products and sellers")}</p>
                </div>
            </S.Item>


        </S.Container>
    );
};