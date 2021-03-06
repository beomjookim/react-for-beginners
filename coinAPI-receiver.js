// part of react app

import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((res)=> res.json())
    .then((json) => {
      console.log(Array.isArray(json))
      setCoins(json);
      setLoading(false);
    })}, []);
  return (
    <div>
      <h1>Cryptocurrencies ({coins.length})</h1>
      {loading? <strong>Loading...</strong>: null}
      <ul>
        {coins.map(coin => <li key={coin.id}>{coin.name} ({coin.symbol}): $ {coin.quotes.USD.price}</li>)}
      </ul>
    </div>
  );
}

export default App;
