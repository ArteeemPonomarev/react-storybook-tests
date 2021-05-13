import React, {useEffect, useState} from 'react';

type PropsType = {}

export const Clock: React.FC<PropsType> = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('Tick')
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const get2digitsString = (num: number) => {
        return num < 10 ? '0' + num : num;
    }


    return (
        <div>
            <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())}</span>
        </div>
    );
};


