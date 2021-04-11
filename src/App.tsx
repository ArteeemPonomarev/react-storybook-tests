import React, {useState} from 'react';
import './App.css';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {RaitingValueType, Rating} from './components/Rating/Rating';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {Accordion} from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';


function App() {
    console.log('App rendering')

    const [valueRating, setRaitingValue] = useState<RaitingValueType>(0);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    const onItemOnCLick = () => alert('hey')

    return (
        <div className={"App"}>

            {/*<OnOff on={switchOn} setOn={setSwitchOn}/> {switchOn.toString()}*/}
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            {/*передаем в неконтролируемый компонент обработчик, чтобы компонент уведомлял нас, хотя значение он сам меняет
            уведомляет App о значении*/}

            <Accordion titleValue={'Menu Accordion'} collapsed={collapsed} setCollapsed={setCollapsed} items= {[{title: 'Artem', value: 1}, {title: 'Alex', value: 2}, {title: 'Valera', value: 3}, {title: 'Victor', value: 4}]} onClick={onItemOnCLick}/>
            <UncontrolledAccordion titleValue={'Menu SelcontrolledAccordion'} />

            <UncontrolledRating/>
            <Rating value={valueRating} onClick={setRaitingValue}/>



        </div>
    );
}

type PagePropsType = {
    title: string
}

function PageTitle(props: PagePropsType) {
    return (
        <h1>
            {props.title}
        </h1>
    );
}


export default App;
