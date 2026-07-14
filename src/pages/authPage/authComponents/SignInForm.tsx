import * as S from "../styles/AuthStyle"

import type { SignInFormData } from "@/components/schemas/schemaAuth.tsx";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { useTranslation } from "react-i18next";

type Props = {
    errors: FieldErrors<SignInFormData>;
    register: UseFormRegister<SignInFormData>;
};

export const SignInForm = ({ errors, register }: Props) => {
    const { t } = useTranslation();

    return (
        <S.FormWrapper>

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
                    {...register("password")}
                    type="password"
                    placeholder={t("Password")}
                    hasError={!!errors.password}
                />

                {errors.password && (
                    <S.InputError>
                        {t(errors.password.message || "")}
                    </S.InputError>
                )}
            </S.FormInputWrapper>

            <S.StyledButton type="submit">
                {t("Sign in")}
            </S.StyledButton>

        </S.FormWrapper>
    );
};