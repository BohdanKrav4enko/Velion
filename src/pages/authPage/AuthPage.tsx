import {AuthForm} from "@/pages/authPage/authComponents/AuthForm.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {useAppSelector} from "@/components";
import {PATH} from "@/routes/paths.ts";
import {useEffect} from "react";

export const AuthPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const user = useAppSelector(state => state.auth.user);
    const from = location.state?.from || PATH.HOME;
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from]);


    return <AuthForm />;
};