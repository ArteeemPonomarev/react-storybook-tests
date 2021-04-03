import React, {useState} from 'react';
import {RaitingValueType} from '../Rating/Rating';

type RaitingPropsType = {

}


export function UncontrolledRating(props: RaitingPropsType) {
    console.log('Raiting rendering')

    const [raitingValue, setRaitingValue] = useState<RaitingValueType>(0)

    return (
        <div>
            <Star selected={raitingValue > 0 } setRaitingValue={() => setRaitingValue(1)}/>
            <Star selected={raitingValue > 1} setRaitingValue={() => setRaitingValue(2)}/>
            <Star selected={raitingValue > 2} setRaitingValue={() => setRaitingValue(3)}/>
            <Star selected={raitingValue > 3} setRaitingValue={() => setRaitingValue(4)}/>
            <Star selected={raitingValue > 4} setRaitingValue={() => setRaitingValue(5)}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    setRaitingValue: () => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering');

    return (
        <span onClick={() => props.setRaitingValue()}>
            {props.selected
                ? <b>star </b>
                : "star " }
        </span>
    );

}