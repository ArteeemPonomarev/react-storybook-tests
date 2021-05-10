import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    console.log('Simple example')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter changing')
        document.title = counter.toString();
    }, [counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
        </>
    )
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    console.log('Simple example')

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('setTimeout')
    //         document.title = counter.toString()
    //     },1000)
    // },[counter])

    useEffect(() => {
        setInterval(() => {
            console.log('tick :' + counter)
            setCounter((state) => state + 1)
        }, 1000)
    }, [])

    return (
        <>
            Hello, counter: {counter} - fake: {fake}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
        </>
    )
}

const calculateTime = () => {
    return `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
}

export const Clock = () => {
    const [time, setTime] = useState<string>(calculateTime);



    useEffect(() => {
        setInterval(() => {
            setTime(calculateTime())
        }, 1000)
    },[])

    return (
        <>
            Time now: {time}
        </>
    )
}