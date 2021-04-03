import React from 'react';

export type RaitingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RaitingType = {
    value: RaitingValueType
    onClick: (value: RaitingValueType) => void
};

export function Rating(props: RaitingType) {
    console.log('Raiting rendering');

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1} />
            <Star selected={props.value > 1} onClick={props.onClick} value={2} />
            <Star selected={props.value > 2} onClick={props.onClick} value={3} />
            <Star selected={props.value > 3} onClick={props.onClick} value={4} />
            <Star selected={props.value > 4} onClick={props.onClick} value={5} />
            <div>
                <button onClick={() => props.onClick(0)}>0 stars</button>
            </div>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    onClick: (value: RaitingValueType) => void
    value: RaitingValueType
}

function Star(props: StarPropsType) {
    console.log('Star rendering');

    return (
        <span onClick={() => props.onClick(props.value)}>
            {props.selected ? <b>star </b>: "star "}
        </span>
    );
}