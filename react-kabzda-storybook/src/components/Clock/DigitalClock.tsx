import {useEffect, useState} from "react";

type PropsType = {

};

export const DigitalClock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('tick');
            setDate(new Date())
        }, 1000);
        return () => clearInterval(intervalID)
    }, [date]);

    const reformatData = (date: number) => {
        return date < 10 ? "0" + date : date
    }


    const hours = reformatData(date.getHours())
    const minutes = reformatData(date.getMinutes())
    const seconds = reformatData(date.getSeconds())

    return <div>
        <span>{hours}</span>
        :
        <span>{minutes}</span>
        :
        <span>{seconds}</span>
    </div>
}