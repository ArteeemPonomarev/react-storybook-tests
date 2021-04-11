import React, {useReducer} from 'react';
import {reducer} from './reducer';

type AccordionPropsType = {
    titleValue: string
};

type AccordionTitlePropsType = {
    title: string
    onSetCollapsedClick: () => void

};


export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering');


    const [state, dispatch] = useReducer(reducer, {collapsed: false})


    return (
        <div>
            {/*<AccordionTitleMemo*/}
            {/*    title={props.titleValue}*/}
            {/*    onSetCollapsedClick={() => setCollapsed(!collapsed)} />*/}
            <AccordionTitleMemo
                title={props.titleValue}
                onSetCollapsedClick={() => dispatch({type: 'TOGGLE-COLLAPSED'})}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <div>
            <h3 onClick={() => props.onSetCollapsedClick()}>---{props.title}---</h3>
        </div>
    );
}

const AccordionTitleMemo = React.memo(AccordionTitle);

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

