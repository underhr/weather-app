
export default function Info() {
  const date = new Date();
  let weekDay = '';
  switch (date.getDay()) {
    case 0: 
      weekDay = 'Sunday';
      break;
    case 1: 
      weekDay = 'Monday';
      break;
    case 2: 
      weekDay = 'Tuesday';
      break;
    case 3: 
      weekDay = 'Wednesday';
      break;
    case 4: 
      weekDay = 'Thursday';
      break;
    case 5: 
      weekDay = 'Friday';
      break;
    case 6: 
      weekDay = 'Saturday';
  }
  
  let month = '';
  switch (date.getMonth()) {
    case 0: 
      month = 'Jan';
      break;
    case 1: 
      month = 'Feb';
      break;
    case 2: 
      month = 'Mar';
      break;
    case 3: 
      month = 'Apr';
      break;
    case 4: 
      month = 'May';
      break;
    case 5: 
      month = 'Jun';
      break;
    case 6: 
      month = 'Jul';
      break;
    case 7: 
      month = 'Aug';
      break;
    case 8: 
      month = 'Sep';
      break;
    case 9: 
      month = 'Oct';
      break;
    case 10: 
      month = 'Nov';
      break;
    case 11: 
      month = 'Dec';
  }
    return(
        <div className='relative flex items-center justify-center'>
          <img src="./images/bg-today-small.svg" className="sm:hidden w-full" />
          <img src="./images/bg-today-large.svg" className="hidden sm:block w-full" />

          <div className='absolute flex flex-col justify-center items-center gap-4 sm:flex-row sm:justify-between w-full p-6'>
            <div className='text-center sm:text-left'>
              <h4 className='font-bold text-[28px] leading-[1.2]'>Berlin, Germany</h4>
              <h6 className='font-medium text-[18px] leading-[1.2]'>{weekDay}, {month} {date.getDate()}, {date.getFullYear()}</h6>
            </div>

            <div className='flex items-center gap-5'>
              <img src="./images/icon-sunny.webp" alt="Weather image" className='h-45'/>

              <span className='font-semibold italic text-[96px] tracking-[-2%]'>
                20°
              </span>
            </div>
          </div>
        </div>
    );
}