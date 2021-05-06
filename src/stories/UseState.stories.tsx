import React, {useMemo, useState} from 'react';

export default {
    title: 'UseState demo'
}

function generateData() {
    //difficult counting
    console.log('generate data')
    return 1
}

export const Example = () => {
    console.log('Example')

    //const initValue = useMemo(generateData, [])

    //const [counter, setCounter] = useState(initValue);//[0, function(newValue){}]
    const [counter, setCounter] = useState(generateData);
    // motivation of using is difficult counting!!!

    const changer = (state: number) => state + 1;// we give this function in setCounter!!!!


    return(
        <>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </>
    )
}