
export default function Header() {
    return(
      <header className="h-8 flex justify-between">
        <img src="./images/logo.svg" alt="Weather Now Logo" />
        
        <div className="bg-(--neutral-800) flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-md cursor-pointer">
          <img src="./images/icon-units.svg" alt="Units Icon" className="h-3.5" />
          <span className="leading-[1.2] text-[14px]">Units</span>
          <img src="./images/icon-dropdown.svg" alt="Dropdown Icon" className="h-2.5" />
        </div>
      </header>
    );
}