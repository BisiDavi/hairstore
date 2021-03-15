import React from "react";
import Image from "next/image";
import styles from "./loader.module.css";

const Loader = () => {
    return (
        <div className={styles.loaderContainer}>
            <Image
                className={styles.logo}
                src="/logo.jpg"
                height={150}
                width={150}
            />
        </div>
    );
};

export default Loader;
