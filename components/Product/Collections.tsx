import React from "react";
import CollectionView from "./CollectionView";

const Collections = () => {
    const collections = [
        { img: "/customwig_temp.webp", name: "Customize Your Own Unit!" },
        { img: "/stylewig_temp.webp", name: "Signature Style Wigs" },
        { img: "/bundle_temp.png", name: "Provide your own wig bundle" },
        { img: "/shipCollection_temp.webp", name: "Ready to Ship wigs" },
    ];
    return (
        <div className="collections">
            {collections.map((collection) => (
                <CollectionView collection={collection} />
            ))}

            <style jsx>
                {`
                    .collections {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        grid-gap: 25px;
                        margin: 50px 30px;
                    }
                `}
            </style>
        </div>
    );
};

export default Collections;