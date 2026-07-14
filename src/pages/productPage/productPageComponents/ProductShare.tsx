import { Share2, Link2 } from "lucide-react";
import { useTranslation } from "react-i18next";

import * as S from "../ProductPageStyle";

interface ProductShareProps {
    onShare: () => void;
    onCopy: () => void;
}

export const ProductShare = ({
                                 onShare,
                                 onCopy,
                             }: ProductShareProps) => {
    const { t } = useTranslation();

    return (
        <S.ShareSection>
            <S.SecondaryActionButton
                onClick={onShare}
                aria-label={t("Share this product")}
            >
                <Share2 size={18} />
                {t("Share")}
            </S.SecondaryActionButton>

            <S.SecondaryActionButton
                onClick={onCopy}
                aria-label={t("Copy product link")}
            >
                <Link2 size={18} />
                {t("Copy link")}
            </S.SecondaryActionButton>
        </S.ShareSection>
    );
};