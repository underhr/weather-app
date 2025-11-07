import { useState, useEffect } from 'react'
import Header from './Components/Header.jsx'
import Search from './Components/Search.jsx'
import Info from './Components/Info.jsx'
import Details from './Components/Details.jsx'
import DailyForecast from './Components/DailyForecast.jsx'
import HourlyForecast from './Components/HourlyForecast.jsx'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&hourly=temperature_2m');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.json();
        setData(fetchedData);
        console.log(fetchedData);
      } catch (error) {
        console.log("Error fetching data:", error)
      }
    }
    fetchData();
  }, [])

  return (
    <div className="p-4 text-white bg-(--neutral-900) min-h-dvh flex flex-col gap-12">
      <Header />

      <h2 className="text-center font-bold leading-[1.2] text-[52px]">
        How's the sky looking today?
      </h2>

      <Search />

      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        <div className='flex flex-col gap-8 justify-center'>
          <Info />
          <Details />
          <DailyForecast />
        </div>
        <HourlyForecast />
      </div>
    </div>
  )
}

export default App
