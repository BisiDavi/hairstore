import React from "react";
import { Pagelayout } from "../container";
import {
    Nav,
    ServicesBanner,
    AlertBanner,
    HomeBanner,
    SelfiesBanner,
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
            </div>
        </Pagelayout>
    );
};

export default Home;
