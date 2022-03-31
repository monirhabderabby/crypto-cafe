import React, { useEffect, useState } from 'react';
import CoinCard from '../../CoinCard/CoinCard';
import Spinner from '../../Spinner/Spinner';


const Coins = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect( () => {
        setLoading(true)
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            setCoins(data)
        })
        setLoading(false)
    }, [])
    return (
        <div>
        {loading ? <Spinner /> : <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl ms:px-2'>
            <p className='text-center text-3xl font-bold text-gray-500'>
                Available Crypto Currencies
            </p>
            <p className='text-center mb-12 txt-xl font-normal'>
                Total Coins: {coins.length}
            </p>
            
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'>
            {
                coins.map(coin => <CoinCard coin={coin} key={coin.id}></CoinCard>) 
            }
            </div>
        </div>}

        </div>
    );
};

export default Coins;