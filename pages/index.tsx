import React, { useEffect, useState } from "react";
import { Pagelayout } from "../container";
import {
    Nav,
    AlertBanner,
    PromoBanner,
    SelfiesBanner,
    Footer,
} from "../components";
import Loader from "../components/loader";
import HomepageSlider from "../components/Slider/HomepageSlider";
import { Collections } from "../components/Product";
import { Mailinglist } from "../components/Form";
import { MailButton } from "../components/MailList";

const Home = () => {
    const [loader, setLoader] = useState(true);
    const [promoDisplay, setPromoDisplay] = useState(true);
    const [mailModal, setMailModal] = useState(false);

    const promoHandler = () => setPromoDisplay(false);
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
                    {promoDisplay && (
                        <AlertBanner displayHandler={promoHandler} />
                    )}
                    <PromoBanner />
                    <Nav />
                    <HomepageSlider />
                    <Collections />
                    <MailButton showMail={() => setMailModal(true)} />
                    <Mailinglist
                        show={mailModal}
                        onHide={() => setMailModal(false)}
                    />
                    <SelfiesBanner />
                    <Footer />
                    <style jsx>
                        {`
                            .homepage {
                                position: relative;
                            }
                        `}
                    </style>
                </div>
            )}
        </Pagelayout>
    );
};

export default Home;
