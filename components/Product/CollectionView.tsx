import React from "react";
import Image from "next/image";

const CollectionView = ({ imgsrc, name, collection }) => {
    return (
        <div className="collectionView">
            <Image src={imgsrc} alt={name} height={400} width={400} />
            <div className="collection">
                <h4>{collection}</h4>
                <i className="fas fa-long-arrow-alt-right"></i>
            </div>
        </div>
    );
};

export default CollectionView;
