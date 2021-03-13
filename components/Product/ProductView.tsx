import React from "react";
import Image from "next/image";

const ProductView = ({ imgsrc, name, price }) => {
    return (
        <div className="productView">
            <div className="front-view">
                <Image src={imgsrc} alt={name} height={300} width={300} />
            </div>
            <div className="back-view">
                <h1>{name}</h1>
                <h3>{price}</h3>
            </div>
        </div>
    );
};

export default ProductView;
