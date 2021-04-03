import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {UncontrolledAccordion} from './UncontrolledAccordion';


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}

const callback = action('menu clicked');

export const UncontrolledAccordionCollapsed = () => {
    return <UncontrolledAccordion titleValue={'Menu'}/>
}
