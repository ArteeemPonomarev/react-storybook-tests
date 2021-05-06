import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect demo'
}

export const SimpleExample = () => {
    const[counter, setCounter] = useState(1);

    useEffect(() => {
        console.log('useEffect')
    })

    return(
        <>
            Hello, {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    )
}