import { useState, useEffect } from "react";
import {ArrowButton} from "@/components";
import {ArrowUp} from "lucide-react";

export const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) setVisible(true);
            else setVisible(false);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <ArrowButton
            onClick={scrollToTop}
            visible={visible}
        >
            <ArrowUp
                size={24}
                strokeWidth={2.5}
            />
        </ArrowButton>
    );
};
