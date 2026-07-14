    import {ProductsList} from "@/features";
    import {HeroSection} from "@/pages/homePage/component/heroSection/HeroSection.tsx";
    import {BenefitsSection} from "@/pages/homePage/component/benefitsSection/BenefitsSection.tsx";

    export const Home = () => {
        return  (
            <>

                <HeroSection/>

                <ProductsList/>

                <BenefitsSection/>

            </>
        );
    };