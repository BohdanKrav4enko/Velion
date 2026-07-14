import * as S from "@/pages/profilePage/styles/ProfilePageStyle.ts";
import {useAppSelector} from "@/hooks";

type Props = {
    width: number;
    height: number;
    fontSize?: number;
    fontWeight?: number;
    backgroundColor?: string;
    color?: string;
}

export const Avatar = ({width, height, fontSize, fontWeight, backgroundColor, color}: Props) => {

    const profile = useAppSelector(state => state.auth.profile);

    return (
        <S.ProfileAvatar color={color} backgroundColor={backgroundColor} fontWeight={fontWeight} fontSize={fontSize} width={width} height={height}>
            {profile?.name?.charAt(0).toUpperCase() || "U"}
        </S.ProfileAvatar>
    );
};

