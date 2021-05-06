import React, {useEffect, useLayoutEffect, useState} from 'react';

export default {
    title: 'UseEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const[counter, setCounter] = useState(1);

    console.log("Simple example")

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

    return(
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
        </>
    )
}