import React from "react";
import { Pagelayout } from "../container";
import {
    Nav,
    ServicesBanner,
    AlertBanner,
    HomeBanner,
    SelfiesBanner,
    Footer,
} from "../components";

const Home = () => {
    return (
        <Pagelayout title="Welcome">
            <div className="homepage">
                <AlertBanner />
                <Nav />
                <HomeBanner />
                <ServicesBanner />
                <SelfiesBanner />
                <Footer />
            </div>
        </Pagelayout>
    );
};

export default Home;
