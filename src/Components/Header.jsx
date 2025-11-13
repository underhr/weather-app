import { useState } from "react";

function Option({ option, selected }) {
  return(
    <div className={`px-2 py-2.5 rounded-lg flex justify-between items-center
    ${selected && 'bg-(--neutral-700)'}`}>
      {option}
      {selected && <img src="./images/icon-checkmark.svg" alt="Check Mark"/>}
    </div>
  );
}

function UnitSection({ name, op1, op2, system }) {
  return(
    <div className="flex flex-col gap-2">
      <h6 className="text-(--neutral-300) px-2 pt-1.5">{name}</h6>
      <Option option={op1} selected={system === 'Metric'} />
      <Option option={op2} selected={system === 'Imperial'} />
    </div>
  );
}

export default function Header({ system, setSystem }) {
  const [isOpen, setIsOpen] = useState(false);

    return(
      <header className="h-8 flex justify-between relative">
        <img src="./images/logo.svg" alt="Weather Now Logo" />
        
        <div className="bg-(--neutral-800) flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-md cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <img src="./images/icon-units.svg" alt="Units Icon" className="h-3.5" />

          <span className="leading-[1.2] text-[14px]">Units</span>

          <img src="./images/icon-dropdown.svg" alt="Dropdown Icon" className="h-2.5" />
        </div>
             
        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col px-2 py-1.5 absolute bg-(--neutral-800) border border-(--neutral-600) rounded-xl right-0 top-10 w-[214px] z-1 gap-2`}>
          <button className="cursor-pointer leading-[1.2] px-2 py-2.5 text-left rounded-lg hover:bg-(--neutral-700)" onClick={() => setSystem((system === 'Imperial') ? 'Metric' : 'Imperial')}>
            Switch to {`${(system === 'Imperial') ? 'Metric' : 'Imperial'}`}
          </button>

          <UnitSection name="Temperature" op1="Celcius (°C)" op2="Fahrenheit (°F)" system={system}/>
            <hr className="bg-(--neutral-600) border-none h-px"/>
          <UnitSection name="Wind Speed" op1="km/h" op2="mph" system={system}/>
            <hr className="bg-(--neutral-600) border-none h-px"/>
          <UnitSection name="Precipitation" op1="Millimeters (mm)" op2="Inches (in)" system={system}/>
        </div>
      </header>
    );
}