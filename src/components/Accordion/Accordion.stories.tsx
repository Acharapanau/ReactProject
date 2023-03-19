import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title:'Accordion',
    component: Accordion

};

const callBack = action('Accordion mode change event fired');

export const MenuCollapsedMode = () => <Accordion collapsed={true} onChange={callBack} titleValue={'Menu'} /> ;
export const UsersUncollapsedMode = () => <Accordion collapsed={false} onChange={callBack} titleValue={'Users'}/> ;


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion collapsed={value} onChange={() => setValue(!value)} titleValue={'Users'}/>
};
