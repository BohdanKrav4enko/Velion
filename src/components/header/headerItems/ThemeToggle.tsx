import { useAppDispatch, useAppSelector} from "@/components";
import { toggleTheme } from "@/app/appSlice.ts";
import { Moon, Sun } from "lucide-react";
import * as S from "../styles/HeaderStyle"

export const ThemeToggle = () => {
    const dispatch = useAppDispatch();
    const themeMode = useAppSelector((state) => state.app.themeMode);

    return (
        <S.ButtonTheme onClick={() => dispatch(toggleTheme())}>
            {themeMode === "dark" ? <Sun style={{ color: "white" }} /> : <Moon style={{ color: "white" }} />}
        </S.ButtonTheme>
    );
};
