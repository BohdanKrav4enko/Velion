import {
    Container,
    Footer,
    Header,
    Notification,
    ScrollToTop,
    ScrollToTopOnRouteChange,
    useAppSelector
} from "@/components";
import {AppRoutes} from "@/routes";
import 'leaflet/dist/leaflet.css';
import {initAuthListener} from "@/app/firebase/authListener.ts";
import {store} from "@/app/store.ts";
import {setUser} from "@/app/authSlice.ts";
import {BottomNavigation} from "@/components/bottomNavigation/BottomNavigation.tsx";

initAuthListener(store);


export const App = () => {
    const notification = useAppSelector((state) => state.app.notification);
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        store.dispatch(setUser(parsedUser));
    }
    return <>
        <ScrollToTopOnRouteChange/>
        <Header/>
        <Container>
            {notification && (
                <Notification
                    key={notification.id}
                    message={notification.message}
                    type={notification.type}
                    duration={notification.duration}
                />
            )}
            <AppRoutes/>
        </Container>
        <BottomNavigation />
        <Footer/>
        <ScrollToTop/>
    </>
}
