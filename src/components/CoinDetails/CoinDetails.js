import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
  const[coin, setCoin] = useState({})
  const { id } = useParams()
  useEffect(()=>{
    const url = `https://api.coingecko.com/api/v3/coins/${id}`
    fetch(url)
    .then(res=> res.json())
    .then(data=> setCoin(data))
  }, [id])
  return (
    <div>
      <p>{coin.name}</p>
    </div>
  );
};

export default CoinDetails;