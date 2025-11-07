
function Forecast() {
    return(
        <div className="flex rounded-lg gap-2 bg-(--neutral-700) border border-(--neutral-600) items-center justify-between py-2.5 pl-3 pr-4">
            <div className="flex items-center">
                <img src="./images/icon-sunny.webp" className="h-10"/>
                <h5 className="font-medium text-[20px] leading-[1.2]">3 PM</h5>
            </div>
            <p className="font-medium">20°</p>
        </div>
    );
}

export default function HourlyForecast() {
    return(
        <div className="bg-(--neutral-800) rounded-[20px] flex flex-col gap-4 px-4 py-5">
            <div className="flex justify-between items-center">
                <h5 className="font-semibold text-[20px] leading-[1.2]">Hourly Forecast</h5>

                <div className="flex gap-3 py-2 px-4 bg-(--neutral-600) rounded-lg items-center cursor-pointer">
                    <span className="font-medium">
                        Tuesday
                    </span>
                    <img src="./images/icon-dropdown.svg" alt="Dropdown Icon" className="h-2.5" />
                </div>
            </div>
            <Forecast />
            <Forecast />
            <Forecast />
            <Forecast />
            <Forecast />
            <Forecast />
            <Forecast />
            <Forecast />
        </div>
    );
}