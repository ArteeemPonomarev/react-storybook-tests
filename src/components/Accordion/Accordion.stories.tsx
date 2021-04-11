import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';


export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('menu clicked');
const onCLickCallback = action('some item was clicked');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;

export const MenuCollapsedMode2 = Template.bind({});

MenuCollapsedMode2.args = {
    titleValue: 'Menu',
    collapsed: true,
    setCollapsed: callback,
};

export const CollapsedAccordion = Template.bind({});

CollapsedAccordion.args = {
    titleValue: 'Menu',
    collapsed: true,
    setCollapsed: callback,
    items: [
        {title: 'Artem', value: 1},
        {title: 'Alex', value: 2},
        {title: 'Valera', value: 3},
        {title: 'Victor', value: 4}
    ]
};

export const UncollapsedAccordion = Template.bind({});

UncollapsedAccordion.args = {
    titleValue: 'Menu',
    collapsed: false,
    setCollapsed: callback,
    items: [
        {title: 'Artem', value: 1},
        {title: 'Alex', value: 2},
        {title: 'Valera', value: 3},
        {title: 'Victor', value: 4}
    ]
}

//export const AccordionChanging = Template.bind({});


export const AccordionChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return <Accordion titleValue={'Menu'}
                      collapsed={collapsed}
                      setCollapsed={setCollapsed}
                      items={[
                          {title: 'Artem', value: 1},
                          {title: 'Alex', value: 2},
                          {title: 'Valera', value: 3},
                          {title: 'Victor', value: 4}
                      ]}
                      onClick={(id) => {
                          alert(`user with ID ${id} should be happy`)
                      }}/>
}