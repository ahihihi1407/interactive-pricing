import React, { useState } from 'react';

const price_ranges = [
    { pageviews: "10K", price: 8.00 },
    { pageviews: "50K", price: 12.00 },
    { pageviews: "100K", price: 16.00 },
    { pageviews: "500K", price: 24.00 },
    { pageviews: "1M", price: 36.00 },
];

const slide_bar_point = [0, 25, 50, 75, 100];

function Subscription() {
    var [currRange, setCurrRange] = useState(2);
    var [checked, setChecked] = useState(false);

    var pageviews = price_ranges[currRange].pageviews;
    var price = checked ? price_ranges[currRange].price * 0.75 : price_ranges[currRange].price;

    const myStyle = { background: `linear-gradient(to right, #a5f3eb 0%, #a5f3eb ${slide_bar_point[currRange]}%, #eaeefb ${slide_bar_point[currRange]}%, #eaeefb 100%)` };


    function handleChange(event) {
        setCurrRange(event.target.value);
    }

    function handleChecked() {
        setChecked(!checked);
    }

    return (
        <div className="subscription">
            <div className="subscription-price">
                <p className="pageviews">{pageviews} PAGEVIEWS</p>
                <p className="price"><span>${price}.00</span> / month</p>
                <input
                    type="range"
                    className='slide-bar'
                    min="0" max="4"
                    value={currRange}
                    onChange={handleChange}
                    style={myStyle}
                />
            </div>
            <div className="subscription-bill">
                <p className={checked ? "" : "active"}>Monthly billing </p>
                <label className="switch">
                    <input
                        type="checkbox"
                        onChange={handleChecked}
                        defaultChecked={checked}
                    />
                    <span className="slider round" />
                </label>
                <p className={checked ? "active" : ""}>Yearly billing </p>
                <p className="discount desktop">25% discount</p>
                <p className="discount mobile">-25</p>
            </div>
        </div >
    )
}

export default Subscription;