import { useAuthForms } from "@/components";
import { useTranslation } from "react-i18next";
import * as S from "../styles/AuthStyle.ts";
import {useNavigate} from "react-router-dom";
import {PATH} from "@/routes/paths.ts";
import {SignUpForm} from "@/pages/authPage/authComponents/SignUpForm.tsx";
import {SignInForm} from "@/pages/authPage/authComponents/SignInForm.tsx";

export const AuthForm = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const {
        signUpMode,
        setSignUpMode,
        signUpForm,
        signInForm,
        handleSignUp,
        handleSignIn
    } = useAuthForms();

    return (
        <S.AuthPageContainer>

            <S.AuthLeftSide>
                <S.Logo>
                    Velion
                </S.Logo>

                <S.Description>
                    {t(
                        "Discover a wide range of products for everyday life. Shop modern technology, accessories, home essentials, and more in one convenient place with a simple and enjoyable shopping experience."
                    )}
                </S.Description>
            </S.AuthLeftSide>

            <S.AuthCard>

                <S.CardTitle>
                    {signUpMode
                        ? t("Create account")
                        : t("Sign in")}
                </S.CardTitle>

                <S.CardSubtitle>
                    {signUpMode
                        ? t("Create your Velion account")
                        : t("Sign in to continue")}
                </S.CardSubtitle>

                <S.FormContainer
                    as="form"
                    onSubmit={
                        signUpMode
                            ? signUpForm.handleSubmit(handleSignUp)
                            : signInForm.handleSubmit(handleSignIn)
                    }
                >
                    {signUpMode ? (
                        <SignUpForm
                            errors={signUpForm.formState.errors}
                            {...signUpForm}
                        />
                    ) : (
                        <SignInForm
                            errors={signInForm.formState.errors}
                            {...signInForm}
                        />
                    )}
                </S.FormContainer>

                <S.Divider />

                <S.SwitchContainer>
                    <S.SwitchText>
                        {signUpMode
                            ? t("Already have an account?")
                            : t("Don't have an account?")}
                    </S.SwitchText>

                    <S.ButtonsContainer>

                        <S.BackButton
                            type="button"
                            onClick={() => {
                                if (window.history.length > 1) {
                                    navigate(-1);
                                } else {
                                    navigate(PATH.HOME);
                                }
                            }}
                        >
                            ← {t("Back")}
                        </S.BackButton>

                        <S.SwitchButton
                            type="button"
                            onClick={() => {
                                setSignUpMode(!signUpMode);

                                signUpForm.reset();
                                signInForm.reset();
                            }}
                        >
                            {signUpMode
                                ? t("Sign in")
                                : t("Create account")}
                        </S.SwitchButton>


                    </S.ButtonsContainer>
                </S.SwitchContainer>

            </S.AuthCard>

        </S.AuthPageContainer>
    );
};