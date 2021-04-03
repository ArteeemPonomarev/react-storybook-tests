import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';


export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('menu clicked');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;

export const MenuCollapsedMode2 = Template.bind({});

MenuCollapsedMode2.args = {
    titleValue: 'Menu',
    collapsed: true,
    setCollapsed: callback
};

export const CollapsedAccordion = Template.bind({});

CollapsedAccordion.args= {
    titleValue: 'Menu',
    collapsed: true,
    setCollapsed: callback
};

export const UncollapsedAccordion = Template.bind({});

UncollapsedAccordion.args = {
    titleValue: 'Menu',
    collapsed: false,
    setCollapsed: callback
}

export const AccordionChanging = Template.bind({});



export const AccordionCanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return <Accordion titleValue={'Menu'} collapsed={collapsed} setCollapsed={setCollapsed}/>
}