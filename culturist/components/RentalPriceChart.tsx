import axios from 'axios';
import { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function RentalPriceChart() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/resources/rent');
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // const dummyData = [
  //   {
  //     region: 'North and West Metro',
  //     council: 'Monash',
  //     average_rent: 475
  //   },
  //   {
  //     region: 'Eastern Metro',
  //     council: 'Knox',
  //     average_rent: 327.3
  //   },
  //   {
  //     region: 'Southen Metro',
  //     council: 'Port Phillip',
  //     average_rent: 500
  //   },
  //   {
  //     region: 'North and West Metro',
  //     council: 'Melbourne City',
  //     average_rent: 600
  //   },
  //   {
  //     region: 'Eastern Metro',
  //     council: 'Knox 3',
  //     average_rent: 327.3
  //   },
  //   {
  //     region: 'Southen Metro',
  //     council: 'Port Phillip 3',
  //     average_rent: 500
  //   },
  //   {
  //     region: 'North and West Metro',
  //     council: 'Melbourne City 3',
  //     average_rent: 600
  //   },
  //   {
  //     region: 'Eastern Metro',
  //     council: 'Knox 2',
  //     average_rent: 327.3
  //   },
  //   {
  //     region: 'Southen Metro',
  //     council: 'Port Phillip 2',
  //     average_rent: 500
  //   },
  //   {
  //     region: 'North and West Metro',
  //     council: 'Melbourne City 2',
  //     average_rent: 600
  //   },
  // ]
  if (isLoading) return <p>Loading...</p>

  const chartSetting = {
    xAxis: [
      {
        label: 'Average Rent by Council (2019-2023)',
      },
    ],
    width: 800,
    height: 700
    
  };
  return (
    <>
      {/* {data.length > 0 ? ( */}
      <BarChart
        dataset={data}
        layout='horizontal'
        yAxis={[{ scaleType: 'band', dataKey: 'council' }]}
        series={[{ dataKey: 'average_rent', label: 'Average Rent Per Week (AUD)' }]}
        {...chartSetting}
      />
    {/* ) : (
      <div>Loading...</div>
    )} */}
    </>
  );
}

