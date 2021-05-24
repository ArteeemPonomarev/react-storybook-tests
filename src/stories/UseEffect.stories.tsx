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

export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    console.log('SetInterval example')

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('setTimeout')
    //         document.title = counter.toString()
    //     },1000)
    // },[counter])

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('tick :' + counter)
            setCounter((state) => state + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
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

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);

    console.log("Component Rendered");

    useEffect(() => {
        console.log("useEffect occurred: " + counter)

        return () => {
            console.log('RESET EFFECT ' + counter)
        }
    }, [counter])

    const increase = () => { setCounter(counter + 1)}

    return (
        <>
            Hello, counter: {counter} <button onClick={increase}>+</button>
        </>
    )
}

export const KeyTrackerExample = () => {
    const [text, setText] = useState('');

    console.log("Component rendered with " + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return (
        <>
            Typed text: {text}
        </>
    )
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('');

    console.log("Component rendered with " + text);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('Timeout expired')
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return (
        <>
            Typed text: {text}
        </>
    )
}