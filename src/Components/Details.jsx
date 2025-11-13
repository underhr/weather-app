
function Detail({ title, info }) {
    return(
        <div className="bg-(--neutral-800) border border-(--neutral-600) rounded-xl flex flex-col gap-6 p-5 w-[calc(50%-10px)]">
            <h6 className="font-medium text-[18px] leading-[1.2]">{title}</h6>
            <p className="font-light text-[32px]">{info}</p>
        </div>
    );
}

export default function Details({ data }) {
    console.log(data);
    return(
        <div className="flex flex-wrap sm:flex-nowrap justify-between gap-4">
            <Detail title="Feels Like" info={`${Math.floor(data.current.apparent_temperature)}°`} />
            <Detail title="Humidity" info={`${Math.floor(data.current.relative_humidity_2m)}%`} />
            <Detail title="Wind" info={`${Math.floor(data.current.wind_speed_10m)} ${data.current_units.wind_speed_10m}`} />
            <Detail title="Precipitation" info={`${Math.floor(data.current.precipitation)} ${data.current_units.precipitation}`} />
        </div>
    );
}