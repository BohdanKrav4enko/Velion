import {createRoot} from 'react-dom/client'
import {App} from "./app/App.tsx";
import {Provider} from "react-redux";
import {store} from "./app/store.ts";
import {GlobalStyle} from "./styles/GlobalStyle.ts";
import {BrowserRouter} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n.ts";
import {ThemeProvider} from "@/styles/ThemeProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ThemeProvider>

            <GlobalStyle/>

            <BrowserRouter>

                <I18nextProvider i18n={i18n}>
                    <App/>
                </I18nextProvider>

            </BrowserRouter>

        </ThemeProvider>
    </Provider>
)
