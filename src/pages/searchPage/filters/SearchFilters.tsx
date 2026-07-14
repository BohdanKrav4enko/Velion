import { useState } from "react";
import { Slider } from "@mui/material";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { useTranslation } from "react-i18next";

import * as S from "./SearchFiltersStyle";
import {useTheme} from "styled-components";

type Props = {
    categories: string[];

    selectedCategories: string[];

    setSelectedCategories: React.Dispatch<
        React.SetStateAction<string[]>
    >;

    priceRange: number[];

    setPriceRange: React.Dispatch<
        React.SetStateAction<number[]>
    >;

    maxPrice: number;
};

export const SearchFilters = ({
                                  categories,
                                  selectedCategories,
                                  setSelectedCategories,
                                  priceRange,
                                  setPriceRange,
                                  maxPrice,
                              }: Props) => {
    const { t } = useTranslation();
    const theme = useTheme();
    const [opened, setOpened] = useState(false);

    const toggleCategory = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(prev =>
                prev.filter(c => c !== category)
            );
        } else {
            setSelectedCategories(prev => [
                ...prev,
                category,
            ]);
        }
    };

    return (
        <S.FiltersContainer>

            <S.FiltersAccordionButton
                onClick={() => setOpened(prev => !prev)}
                type="button"
            >
                <S.FiltersAccordionLeft>
                    <SlidersHorizontal size={18} />
                    {t("Filters")}
                </S.FiltersAccordionLeft>

                <ChevronDown
                    size={18}
                    style={{
                        transform: opened
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: ".2s",
                    }}
                />
            </S.FiltersAccordionButton>

            <S.FiltersContent opened={opened}>

                <S.FiltersTitle>
                    {t("Filters")}
                </S.FiltersTitle>

                <S.FilterSection>

                    <S.SectionTitle>
                        {t("Categories")}
                    </S.SectionTitle>

                    <S.CategoryList>
                        {categories.map(category => (
                            <S.CategoryItem key={category}>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(category)}
                                    onChange={() =>
                                        toggleCategory(category)
                                    }
                                />

                                {category}
                            </S.CategoryItem>
                        ))}
                    </S.CategoryList>

                </S.FilterSection>

                <S.FilterSection>

                    <S.SectionTitle>
                        {t("Price")}
                    </S.SectionTitle>

                    <S.PriceContainer>

                        <S.PriceValues>

                            <S.PriceValue>
                                {priceRange[0].toLocaleString()} ₴
                            </S.PriceValue>

                            <S.PriceValue>
                                {priceRange[1].toLocaleString()} ₴
                            </S.PriceValue>

                        </S.PriceValues>

                        <Slider
                            value={priceRange}
                            onChange={(_, value) =>
                                setPriceRange(value as number[])
                            }
                            min={0}
                            max={maxPrice}
                            valueLabelDisplay="auto"
                            sx={{
                                color: theme.colors.primary,

                                "& .MuiSlider-thumb": {
                                    width: 18,
                                    height: 18,
                                    backgroundColor: theme.colors.primary,
                                    border: `2px solid ${theme.colors.surface}`,
                                },

                                "& .MuiSlider-track": {
                                    backgroundColor: theme.colors.primary,
                                },

                                "& .MuiSlider-rail": {
                                    opacity: 0.25,
                                    backgroundColor: theme.colors.textSecondary,
                                },

                                "& .MuiSlider-valueLabel": {
                                    backgroundColor: theme.colors.surface,
                                    color: theme.colors.text,
                                    border: `1px solid ${theme.colors.border}`,
                                },
                            }}
                        />

                    </S.PriceContainer>

                </S.FilterSection>

            </S.FiltersContent>

        </S.FiltersContainer>
    );
};