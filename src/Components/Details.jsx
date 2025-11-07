
function Detail() {
    return(
        <div className="bg-(--neutral-800) border border-(--neutral-600) rounded-xl flex flex-col gap-6 p-5 w-[calc(50%-10px)]">
            <h6 className="font-medium text-[18px] leading-[1.2]">Feels Like</h6>
            <p className="font-light text-[32px]">18°</p>
        </div>
    );
}

export default function Details() {
    return(
        <div className="flex flex-wrap sm:flex-nowrap justify-between gap-4">
            <Detail />
            <Detail />
            <Detail />
            <Detail />
        </div>
    );
}