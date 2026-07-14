import {ThemeProvider as StyledThemeProvider} from "styled-components";
import {useAppSelector} from "@/hooks";

import {lightTheme, darkTheme} from "@/theme/Theme";


type Props = {
    children: React.ReactNode;
};


export const ThemeProvider = ({children}: Props) => {

    const themeMode = useAppSelector(
        state => state.app.themeMode
    );


    return (
        <StyledThemeProvider
            theme={
                themeMode === "dark"
                    ? darkTheme
                    : lightTheme
            }
        >
            {children}
        </StyledThemeProvider>
    );
};