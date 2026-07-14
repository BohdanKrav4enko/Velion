import { useTranslation } from "react-i18next";
import * as S from "./HeroSectionStyle";

export const HeroSection = () => {
    const { t } = useTranslation();

    const scrollToProducts = () => {
        document
            .getElementById("products")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    };

    return (
        <S.Container>

            <S.Content>

                <S.Title>
                    {t("Velion — Smart Shopping Made Simple")}
                </S.Title>

                <S.Description>
                    {t(
                        "Discover quality electronics, home products, and everyday essentials at Velion — a modern marketplace designed for easy and reliable shopping."
                    )}
                </S.Description>

                <S.Button onClick={scrollToProducts}>
                    {t("Start shopping")}
                </S.Button>

            </S.Content>

        </S.Container>
    );
};