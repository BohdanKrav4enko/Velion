import * as S from "./styles/ProfilePageStyle"
import {ArrowLeft, BadgeCheck, House, LogOut, Package, Pencil, Plus, Save,} from "lucide-react";
import {Avatar, useAboutMe} from "@/components";

import {Switch} from "@mui/material";
import {Controller} from "react-hook-form";
import {PATH} from "@/routes/paths.ts";
import {useNavigate} from "react-router-dom";

export const ProfilePage = () => {

    const navigate = useNavigate()

    const {
        profile,
        isEdit,
        setEdit,
        control,
        register,
        handleSubmit,
        onSubmit,
        errors,
        isChanged,
        handleCancelOrHome,
        logoutHandler,
        t
    } = useAboutMe();

    return (
        <S.ProfileContainer>

            <S.ProfileHeader>

                <Avatar width={88} height={88}/>

                <S.ProfileHeaderContent>

                    <S.ProfileUserName>
                        {profile?.name} {profile?.surname}
                    </S.ProfileUserName>

                    <S.ProfileEmail>
                        {profile?.email}
                    </S.ProfileEmail>

                    <S.ProfilePageLabel>
                        {
                            profile?.isAdmin ? (
                                <>
                                    {t("Administrator")}
                                    {" "}
                                    <BadgeCheck size={18} />
                                </>
                            ) : (
                                t("Personal Information")
                            )
                        }
                    </S.ProfilePageLabel>

                </S.ProfileHeaderContent>

            </S.ProfileHeader>

            <S.ProfileCard>

                <S.ProfileField>
                    <S.ProfileFieldTitle>
                        {t("Name")}
                    </S.ProfileFieldTitle>

                    <S.ProfileValue>
                        {isEdit ? (
                            <div>
                                <S.AboutMeInput {...register("name")} />

                                {errors.name && (
                                    <S.StyleMeError>
                                        {errors.name.message}
                                    </S.StyleMeError>
                                )}
                            </div>
                        ) : (
                            profile?.name
                        )}
                    </S.ProfileValue>
                </S.ProfileField>

                <S.ProfileField>
                    <S.ProfileFieldTitle>
                        {t("Surname")}
                    </S.ProfileFieldTitle>

                    <S.ProfileValue>
                        {isEdit ? (
                            <div>
                                <S.AboutMeInput {...register("surname")} />

                                {errors.surname && (
                                    <S.StyleMeError>
                                        {errors.surname.message}
                                    </S.StyleMeError>
                                )}
                            </div>
                        ) : (
                            profile?.surname
                        )}
                    </S.ProfileValue>
                </S.ProfileField>

                <S.ProfileField>
                    <S.ProfileFieldTitle>
                        {t("Email")}
                    </S.ProfileFieldTitle>

                    <S.ProfileValue>
                        {isEdit ? (
                            <div>
                                <S.AboutMeInput {...register("email")} />

                                {errors.email && (
                                    <S.StyleMeError>
                                        {errors.email.message}
                                    </S.StyleMeError>
                                )}
                            </div>
                        ) : (
                            profile?.email
                        )}
                    </S.ProfileValue>
                </S.ProfileField>

                <S.ProfileField>
                    <S.ProfileFieldTitle>
                        {t("Phone")}
                    </S.ProfileFieldTitle>

                    <S.ProfileValue>
                        {isEdit ? (
                            <div>
                                <S.AboutMeInput {...register("phone")} />

                                {errors.phone && (
                                    <S.StyleMeError>
                                        {errors.phone.message}
                                    </S.StyleMeError>
                                )}
                            </div>
                        ) : (
                            profile?.phone
                        )}
                    </S.ProfileValue>
                </S.ProfileField>

                <S.ProfileField>
                    <S.ProfileFieldTitle>
                        {t("Admin")}
                    </S.ProfileFieldTitle>

                    <S.ProfileValue>
                        {isEdit ? (
                            <Controller
                                name="isAdmin"
                                control={control}
                                render={({ field }) => (
                                    <Switch
                                        {...field}
                                        checked={field.value}
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.checked
                                            )
                                        }
                                    />
                                )}
                            />
                        ) : (
                            <>
                                {profile?.isAdmin
                                    ? t("Yes")
                                    : t("No")}
                            </>
                        )}
                    </S.ProfileValue>
                </S.ProfileField>

            </S.ProfileCard>

            {profile?.isAdmin && (
                <S.AdminSection>

                    <S.AdminTitle>
                        {t("Administration")}
                    </S.AdminTitle>

                    <S.ProfileActionsContainer>

                        <S.ProfileActionButton
                            onClick={() =>
                                navigate(PATH.ORDERS_PAGE)
                            }
                        >
                            <Package size={18}/>
                            {t("Orders")}
                        </S.ProfileActionButton>

                        <S.ProfileActionButton
                            onClick={() =>
                                navigate(PATH.ADD_PRODUCT)
                            }
                        >
                            <Plus size={18}/>
                            {t("Add Product")}
                        </S.ProfileActionButton>

                    </S.ProfileActionsContainer>

                </S.AdminSection>
            )}

            <S.ProfileButtonsContainer>

                <S.ProfileButton
                    disabled={isEdit && !isChanged}
                    onClick={
                        isEdit
                            ? handleSubmit(onSubmit)
                            : () => setEdit(true)
                    }
                >
                    {isEdit
                        ? <Save size={18}/>
                        : <Pencil size={18}/>}

                    {isEdit
                        ? t("Save")
                        : t("Edit")}
                </S.ProfileButton>

                <S.ProfileSecondaryButton
                    onClick={handleCancelOrHome}
                >
                    {isEdit
                        ? <ArrowLeft size={18}/>
                        : <House size={18}/>}

                    {isEdit
                        ? t("Back")
                        : t("Home")}
                </S.ProfileSecondaryButton>

                <S.ProfileLogOutButton
                    onClick={logoutHandler}
                >
                    <LogOut size={18}/>
                    {t("Logout")}
                </S.ProfileLogOutButton>

            </S.ProfileButtonsContainer>

        </S.ProfileContainer>
    );
};