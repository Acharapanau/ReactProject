import React, {useState} from "react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";


export default {
    title:'UncontrolledOnOff',
    component: UncontrolledOnOff

};

const callBack = action('Accordion mode change event fired');


export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callBack}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callBack}/>
export const BuyMode = () => <div>Unsync when change defaultVlue when alredy rendered</div>
export const DefaultInputValue = () => <input defaultValue={'yo'}/>
