import React from 'react';

const CoinCard = ({coin}) => {
    return (
        <div>
            <p>{coin.name}</p>
        </div>
    );
};

export default CoinCard;