import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {OnOff} from './OnOff';

export default {
    title: 'OnOff stories',
    component: OnOff
}

const callback = action('on or off clicked')

export const OnMode = () => <OnOff on={true} setOn={callback}/>
export const OffMode = () => <OnOff on={false} setOn={callback}/>
export const OnOffChanged= () => {
    const [on, setOn] = useState<boolean>(false)
    return <OnOff on={on} setOn={setOn}/>
}