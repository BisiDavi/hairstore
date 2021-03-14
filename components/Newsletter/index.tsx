import React from "react";

const Newsletter = () => {
    return (
        <div className="newsletter">
            <h5>Subscribe to our newsletter</h5>
            <p>Promotions, new products and sales.Directly to your inbox.</p>
            <form>
                <input placeholder="Email Address" />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default Newsletter;
