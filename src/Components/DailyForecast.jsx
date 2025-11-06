
function Forecast() {
    return(
        <div className="bg-(--neutral-800) border border-(--neutral-600) rounded-xl flex flex-col items-center gap-4 py-4 px-2.5 w-[30%] sm:flex-1">
            <h6 className="font-medium text-[18px] leading[1.2]">Tue</h6>
            <img src="./images/icon-sunny.webp" alt="Weather Icon" className="w-15"/>
            <div className="flex justify-between w-full font-medium text-[16px] leading-[1.2]">
                <span>20°</span>
                <span>14°</span>
            </div>
        </div>
    );
}

export default function DailyForecast() {
    return(
        <div className="flex flex-col gap-5">
            <h5 className="font-semibold text-[20px] leading-[1.2]">Daily forecast</h5>
            <div className="flex flex-wrap gap-4">
                <Forecast />
                <Forecast />
                <Forecast />
                <Forecast />
                <Forecast />
                <Forecast />
                <Forecast />                
            </div>

        </div>
    );
}