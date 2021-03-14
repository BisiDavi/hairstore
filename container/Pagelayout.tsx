import React, { FC } from "react";
import Head from "next/head";
import { PagecontainerProps } from "../types";

const Pagelayout: FC<PagecontainerProps> = ({
    title,
    children,
}): JSX.Element => {
    return (
        <div>
            <Head>
                <title>Jenjen's Luxury hair & beauty | {title}</title>
            </Head>
            {children}
        </div>
    );
};

export default Pagelayout;
