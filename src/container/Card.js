import React from 'react';
import Subscription from '../components/Subscription';
import Info from '../components/Info';

function Card() {
    return (
        <div className="card-container">
            <Subscription />
            <hr />
            <Info />
        </div>
    )
}

export default Card;