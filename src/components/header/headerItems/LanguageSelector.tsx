import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import { ChevronDown } from "lucide-react";

import * as S from "../styles/settingsSectionStyle";

const languages = [
    { code: "en", label: "EN", countryCode: "GB" },
    { code: "ua", label: "UA", countryCode: "UA" },
    { code: "ru", label: "RU", countryCode: "RU" },
    { code: "de", label: "DE", countryCode: "DE" },
];

export const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const [open, setOpen] = useState(false);

    const currentLanguage = useMemo(() => {
        return (
            languages.find(language =>
                i18n.language.startsWith(language.code)
            ) || languages[0]
        );
    }, [i18n.language]);

    const handleToggle = () => {
        setOpen(prev => !prev);
    };

    const handleLanguageChange = (languageCode: string) => {
        i18n.changeLanguage(languageCode);
        setOpen(false);
    };

    return (
        <S.DropdownWrapper>
            <S.DropdownButton
                onClick={handleToggle}
                aria-label="Select language"
            >
                <ReactCountryFlag
                    countryCode={currentLanguage.countryCode}
                    svg
                    style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "3px",
                    }}
                />

                <span>{currentLanguage.label}</span>

                <ChevronDown
                    size={16}
                    style={{
                        transition: "0.25s",
                        transform: open
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                    }}
                />
            </S.DropdownButton>

            <S.DropdownList open={open}>
                {languages.map(language => (
                    <S.DropdownItem
                        key={language.code}
                        onClick={() =>
                            handleLanguageChange(language.code)
                        }
                    >
                        <ReactCountryFlag
                            countryCode={language.countryCode}
                            svg
                            style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "3px",
                            }}
                        />

                        <span>{language.label}</span>
                    </S.DropdownItem>
                ))}
            </S.DropdownList>
        </S.DropdownWrapper>
    );
};

export default LanguageSelector;