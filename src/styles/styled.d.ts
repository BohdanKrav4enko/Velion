import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        media: {
            mobile: string;
            tablet: string;
            desktop: string;
        };

        colors: {
            primary: string;
            secondary: string;

            background: string;

            surface: string;
            surfaceSecondary: string;

            text: string;
            textSecondary: string;
            textMuted: string;

            border: string;

            danger: string;

            shadow: string;
        };
    }
}