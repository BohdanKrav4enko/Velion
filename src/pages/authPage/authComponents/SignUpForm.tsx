import * as S from '../styles/AuthStyle.ts';

import type { SignUpFormData } from "@/components/schemas/schemaAuth.tsx";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { useTranslation } from "react-i18next";

type Props = {
    errors: FieldErrors<SignUpFormData>;
    register: UseFormRegister<SignUpFormData>;
};

export const SignUpForm = ({ errors, register }: Props) => {
    const { t } = useTranslation();

    return (
        <S.FormWrapper>

            <S.FormRow>

                <S.FormInputWrapper>
                    <S.StyledSignUpInput
                        {...register("name")}
                        placeholder={t("First name")}
                        hasError={!!errors.name}
                    />

                    {errors.name && (
                        <S.InputError>
                            {t(errors.name.message || "")}
                        </S.InputError>
                    )}
                </S.FormInputWrapper>

                <S.FormInputWrapper>
                    <S.StyledSignUpInput
                        {...register("surname")}
                        placeholder={t("Last name")}
                        hasError={!!errors.surname}
                    />

                    {errors.surname && (
                        <S.InputError>
                            {t(errors.surname.message || "")}
                        </S.InputError>
                    )}
                </S.FormInputWrapper>

            </S.FormRow>

            <S.FormInputWrapper>
                <S.StyledSignUpInput
                    {...register("email")}
                    type="email"
                    placeholder={t("Email address")}
                    hasError={!!errors.email}
                />

                {errors.email && (
                    <S.InputError>
                        {t(errors.email.message || "")}
                    </S.InputError>
                )}
            </S.FormInputWrapper>

            <S.FormInputWrapper>
                <S.StyledSignUpInput
                    {...register("phone")}
                    type="tel"
                    placeholder={t("Phone number")}
                    hasError={!!errors.phone}
                />

                {errors.phone && (
                    <S.InputError>
                        {t(errors.phone.message || "")}
                    </S.InputError>
                )}
            </S.FormInputWrapper>

            <S.FormInputWrapper>
                <S.StyledSignUpInput
                    {...register("password")}
                    type="password"
                    placeholder={t("New password")}
                    hasError={!!errors.password}
                />

                {errors.password && (
                    <S.InputError>
                        {t(errors.password.message || "")}
                    </S.InputError>
                )}
            </S.FormInputWrapper>

            <S.StyledButton type="submit">
                {t("Create account")}
            </S.StyledButton>

        </S.FormWrapper>
    );
};