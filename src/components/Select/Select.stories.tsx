import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';


import {SelectD} from './SelectD';

export default {
    title: 'SelectD',
    component: SelectD
}

export const WithValue = () => {

    const [value, setValue] = useState('2')

    return (
        <>
            <SelectD value={value}
                     onChange={setValue}
                     items={[{value: '1', title: 'Minsk'},
                         {value: '2', title: 'Polotsk'},
                         {value: '3', title: 'Vitebsk'}]}/>

        </>
    )
};

export const WithoutValue = () => {

    const [value, setValue] = useState(null);


    return (
        <>
            <SelectD value={value}
                     onChange={setValue}
                     items={[{value: '1', title: 'Minsk'},
                         {value: '2', title: 'Polotsk'},
                         {value: '3', title: 'Vitebsk'}]}/>

        </>
    )
};