import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
// Style Component
import './LineChart.css';

interface HistoricDataProps {
  history: { timestamp: number; price: number }[];
}

const LineChart: React.FC<HistoricDataProps> = ({ history }) => {
  const [data, setData] = useState<any[]>([['Data', 'Prices']]);

  useEffect(() => {
    let dataCopy: any[] = [['Data', 'Prices']];

    history.forEach((item: { timestamp: number; price: number }) => {
      dataCopy.push([
        `${new Date(item.timestamp).toLocaleTimeString().slice(0, 5)}`,
        item.price,
      ]);
      setData(dataCopy);
    });
  }, [history]);

  return (
    <div>
      {
        history.length > 0 ? (
          <Chart chartType="LineChart" data={data} height="100%" legendToggle />
        ) : (
          <h3>No History</h3>
        )
      }
    </div>
  );
};

export default LineChart;
