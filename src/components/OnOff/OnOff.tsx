import React from 'react';


type OnOffPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    console.log("onOff rendering")


    console.log(props.on)

    const onStyle = {
        padding: "5px",
        display: "inline-block",
        width: "50px",
        border: "2px solid black",
        backgroundColor: props.on ? "green" : "white",
    };
    const offStyle = {
        padding: "5px",
        marginLeft: "2px",
        display: "inline-block",
        width: "50px",
        border: "2px solid black",
        backgroundColor: props.on ? "white" : "red",

    };
    const indicatorStyle = {
        marginTop: "5px",
        marginLeft: "10px",
        display: "inline-block",
        width: "15px",
        height: "15px",
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: props.on ? "green" : "red"
    };

    return (
        <div>
            <div style={onStyle} onClick={() => {props.setOn(true)}}>On</div>
            <div style={offStyle} onClick={() => {props.setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

