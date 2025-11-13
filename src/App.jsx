import { useState, useEffect } from 'react'
import Header from './Components/Header.jsx'
import Search from './Components/Search.jsx'
import Info from './Components/Info.jsx'
import Details from './Components/Details.jsx'
import DailyForecast from './Components/DailyForecast.jsx'
import HourlyForecast from './Components/HourlyForecast.jsx'

function App() {
  const [coords, setCoords] = useState(null);
  const [system, setSystem] = useState("Metric");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }
  
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });
      },
      (err) => {
      setError(err.message);
      }
    );
  }, []);
  
  useEffect(() => {
    if (!coords) return; // wait until we have coords

    async function fetchData() {
      try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&hourly=temperature_2m&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation${(system === 'Metric') ? '' : '&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch'}`);
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        setError(error.message);
        console.log("Error fetching data:", error);
      }
    }
    fetchData();
  }, [coords, system]);
  
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  console.log(data);

  return (
    <div className="p-4 text-white bg-(--neutral-900) min-h-dvh flex flex-col gap-12">
      <Header system={system} setSystem={setSystem}/>

      <h2 className="text-center font-[Bricolage] leading-[1.2] text-[52px]">
        How's the sky looking today?
      </h2>

      <Search />

      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        <div className='flex flex-col gap-8 justify-center'>
          <Info data={data} />
          <Details data={data} />
          <DailyForecast data={data} />
        </div>
        <HourlyForecast data={data} />
      </div>
    </div>
  )
}

export default App
