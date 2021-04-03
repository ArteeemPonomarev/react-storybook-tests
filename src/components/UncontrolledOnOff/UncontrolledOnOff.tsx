import React, {useState} from 'react';


type OnOffPropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export function UncontrolledOnOff(props: OnOffPropsType) {

    console.log("onOff rendering")

    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

    console.log(on);

    const onStyle = {
        padding: "5px",
        display: "inline-block",
        width: "50px",
        border: "2px solid black",
        backgroundColor: on ? "green" : "white",
    };
    const offStyle = {
        padding: "5px",
        marginLeft: "2px",
        display: "inline-block",
        width: "50px",
        border: "2px solid black",
        backgroundColor: on ? "white" : "red",

    };
    const indicatorStyle = {
        marginTop: "5px",
        marginLeft: "10px",
        display: "inline-block",
        width: "15px",
        height: "15px",
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: on ? "green" : "red"
    };

    const onMenuClicked = (on: boolean) => {
        setOn(on);
        props.onChange(on);
    }

    return (
        <div>
            <div style={onStyle} onClick={() => onMenuClicked(true)}>On</div>
            <div style={offStyle} onClick={() => onMenuClicked(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

