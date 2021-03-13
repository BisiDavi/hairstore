import React, { useEffect, useState } from "react";
import { Pagelayout } from "../container";

import {
    Nav,
    ServicesBanner,
    AlertBanner,
    HomeBanner,
    PromoBanner,
    SelfiesBanner,
    Footer,
} from "../components";

import Loader from "../components/loader";
import HomepageSlider from "../components/Slider/HomepageSlider";

const Home = () => {
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        const startLoader = setTimeout(() => setLoader(false), 2000);
        return () => {
            clearTimeout(startLoader);
        };
    }, []);
    return (
        <Pagelayout title="Welcome">
            {loader ? (
                <Loader />
            ) : (
                <div className="homepage">
                    <PromoBanner />
                    <AlertBanner />
                    <Nav />
                    <HomepageSlider />
                    <HomeBanner />
                    <ServicesBanner />
                    <SelfiesBanner />
                    <Footer />
                </div>
            )}
        </Pagelayout>
    );
};

export default Home;
