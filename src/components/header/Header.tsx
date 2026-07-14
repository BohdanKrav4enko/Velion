import {HeaderButtons, HeaderLogo} from "./index.ts";
import * as S from "./styles/HeaderStyle";
import {SearchBar} from "@/components/header/search/SearchBar.tsx";
// import {CategoriesMenu} from "@/components/header/categories/CategoriesMenu.tsx";

export const Header = () => {
    return (
        <>
            <S.HeaderContainer>
                <HeaderLogo/>
                <SearchBar/>
                {/*<CategoriesMenu />*/}
                <HeaderButtons/>
            </S.HeaderContainer>
        </>
    );
};
