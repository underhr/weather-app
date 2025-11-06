import Header from './Components/Header.jsx'
import Search from './Components/Search.jsx'
import Info from './Components/Info.jsx'
import Details from './Components/Details.jsx'
import DailyForecast from './Components/DailyForecast.jsx'

function App() {
  return (
    <div className="p-4 text-white bg-(--neutral-900) min-h-dvh flex flex-col gap-12">
      <Header />

      <h2 className="text-center font-bold leading-[1.2] text-[52px]">
        How's the sky looking today?
      </h2>

      <div className="flex flex-col gap-8 justify-center">
        <Search />
        <Info />
        <Details />
        <DailyForecast />
      </div>
    </div>
  )
}

export default App
