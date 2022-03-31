import React, { useEffect, useState } from 'react';
import CoinCard from '../../CoinCard/CoinCard';

const Coins = () => {
    const [coins, setCoins] = useState([])
    useEffect( () => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            setCoins(data)
        })
    }, [])
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl ms:px-2'>
            <p className='text-center text-3xl font-bold text-gray-500'>
                Available Crypto Currencies
            </p>
            <p className='text-center mb-12 txt-xl font-normal'>
                Total Coins: {coins.length}
            </p>
            {
                coins.map(coin => <CoinCard coin={coin} key={coin.id}></CoinCard>) 
            }
        </div>
    );
};

export default Coins;