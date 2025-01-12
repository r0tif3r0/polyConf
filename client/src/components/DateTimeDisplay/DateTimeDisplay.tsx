import { FC, useEffect, useState } from 'react'
import style from './DateTimeDisplay.module.scss'

export const DateTimeDisplay: FC = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const optionsTime: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    
    const optionsDate: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  
    const formattedTime = currentDateTime.toLocaleTimeString([], optionsTime);
    const formattedDate = currentDateTime.toLocaleDateString('en-US', optionsDate);
  
    return (
      <div className={style.container}>
        <div className={style.dateDisplay}>
            <span className={style.upcoming__time}>{formattedTime}</span>
            <span className={style.upcoming__day}>{formattedDate}</span>
        </div>
        
        <div className={style.add__calendar}>

        </div>
      </div>
    );
  };
  
