import React, {useState} from "react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";


export default {
    title:'Accordion',
    component: Accordion

};

const callBack = action('Accordion mode change event fired');
const OnClickcallBack = action('some item was clicked');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>


export const MenuCollapsedMode2 = Template.bind({});
MenuCollapsedMode2.args = {
    titleValue:'Menu',
    collapsed:true,
    onChange:callBack,
    items:[],
    onClick:OnClickcallBack
}

// export const MenuCollapsedMode = () => <Accordion collapsed={true} onChange={callBack} titleValue={'Menu'} /> ;
// export const UsersUncollapsedMode = () => <Accordion collapsed={false} onChange={callBack} titleValue={'Users'}/> ;
//
//
// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(true);
//     return <Accordion collapsed={value} onChange={() => setValue(!value)} titleValue={'Users'}/>
// };
