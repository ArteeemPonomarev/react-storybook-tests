import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
};

type AccordionTitlePropsType = {
    title: string
    onSetCollapsedClick: () => void

};

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering');

    const [collapsed, setCollapsed] = useState<boolean>(false);


    return (
        <div>
            <AccordionTitleMemo title={props.titleValue} onSetCollapsedClick={() => setCollapsed(!collapsed)} />
            { !collapsed &&  <AccordionBody/>}
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

