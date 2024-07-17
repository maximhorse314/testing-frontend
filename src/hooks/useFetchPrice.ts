import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchPrice = (symbol: string, minutes: number = 60) => {
  const [data, setData] = useState({
    latest: 0,
    average: 0,
    history: [] as { timestamp: number; price: number }[],
    count: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/price/${symbol}?minutes=${minutes}`);
      setData(response.data);
      setLoading(false);
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000); // Fetch data every 60 seconds
    return () => clearInterval(interval);
  }, [symbol, minutes]);

  return { data, loading, error };
};

export default useFetchPrice;
