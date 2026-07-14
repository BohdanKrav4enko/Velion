import {Routes, Route, Navigate} from "react-router-dom";
import {
    Home,
    EditProductPage,
    AboutPage,
    ContactPage,
    ProductPage,
    PrivacyPage,
    FaqPage,
    OrdersPage,
    ProfilePage,
    AuthPage,
    FavoritesPage,
    CartPage, SearchPage, AddProductPage
} from "@/pages";
import {PATH} from "./paths";
import {AdminRoute, ProtectedRoute} from "@/components";
import {ErrorPage} from "@/pages/errorPage";

export const AppRoutes = () => (
    <Routes>
        <Route path={PATH.HOME} element={<Home/>}/>
        <Route path={PATH.FAVORITES_PAGE} element={<FavoritesPage/>}/>
        <Route path={PATH.CARD_PAGE} element={<CartPage/>}/>
        <Route path={PATH.SEARCH} element={<SearchPage/>}/>
        <Route path={PATH.PRODUCT} element={<ProductPage/>}/>
        <Route path={PATH.PRIVACY_PAGE} element={<PrivacyPage/>}/>
        <Route path={PATH.ABOUT_PAGE} element={<AboutPage/>}/>
        <Route path={PATH.CONTACT_PAGE} element={<ContactPage/>}/>
        <Route path={PATH.FAQ_PAGE} element={<FaqPage/>}/>

        <Route
            path={PATH.AUTH_PAGE}
            element={<AuthPage />}
        />

        <Route element={<ProtectedRoute/>}>
            <Route path={PATH.PROFILE_PAGE} element={<ProfilePage/>}/>
        </Route>

        <Route element={<AdminRoute />}>
            <Route path={PATH.ORDERS_PAGE} element={<OrdersPage />} />
            <Route path={PATH.ADD_PRODUCT} element={<AddProductPage />} />
            <Route path={PATH.EDIT_PRODUCT} element={<EditProductPage />} />
        </Route>
        <Route path={PATH.ERROR_PAGE} element={<ErrorPage />} />
        <Route path="*" element={<Navigate to={PATH.ERROR_PAGE} replace />} />
    </Routes>
);
