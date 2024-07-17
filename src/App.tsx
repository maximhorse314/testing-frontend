import React, { useState } from 'react';
import NavBar from './components/NavBar';
import PriceDisplay from './components/PriceDisplay';
import LineChart from './components/LineChart/LineChart';
import useFetchPrice from './hooks/useFetchPrice';

const App: React.FC = () => {
  const [symbol, setSymbol] = useState('bitcoin');
  const { data, loading, error } = useFetchPrice(symbol);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div>
      <NavBar currentSymbol={symbol} onChange={setSymbol} />
      <PriceDisplay latest={data.latest} average={data.average} />
      <LineChart history={data.history} />
    </div>
  );
};

export default App;
