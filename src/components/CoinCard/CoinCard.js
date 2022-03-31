import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({coin}) => {
    return (
        <div className='shadow-lg p-4 rounded-2xl w-[250px] bg-white'>
            <Link to={'/coins'}>
            <div className='flex gap-4 justify-between items-center'>
                <div className='flex-shrink-0'>
                    <img className='mx-auto object-cover rounded-full h-16 w-16' src={coin.image} alt="coinImage" />
                </div>
                <div className='flex flex-col justify-start'>
                    <span className='text-gray-600 font-medium'>
                        {coin.name}
                    </span>
                    <span className='text-gray-400 text-xs'>
                        {coin.symbol}
                    </span>
                </div>
            </div>
            </Link>

        </div>
    );
};

export default CoinCard;