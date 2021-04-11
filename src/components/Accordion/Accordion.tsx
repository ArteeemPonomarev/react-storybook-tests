import React from 'react';

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: ItemType[]
    onClick:(value: any) => void
};

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
};

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={() => props.setCollapsed(!props.collapsed)}/>
            { !props.collapsed &&  <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={(e) => props.setCollapsed()}>---{props.title}---</h3>
    );
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            {props.items.map((i, index) => <li key={index} onClick={() => {props.onClick(i.value)}}>{i.title}</li>)}
        </ul>
    );
}
