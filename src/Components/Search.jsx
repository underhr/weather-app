
export default function Search() {
    return(
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative md:w-[656px] md:self-center">
          <img src="./images/icon-search.svg" alt="Search Icon" className="absolute top-4 left-4" />
          <input placeholder="Search for a place..." className="bg-(--neutral-800) py-4 px-6 pl-12 rounded-xl sm:flex-1" />

          <button className="bg-(--blue-500) py-4 px-6 rounded-xl text-[20px] leading-[1.2] font-medium cursor-pointer">Search</button>
        </div>
    );
}