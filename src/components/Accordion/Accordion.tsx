import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items:[]
    onClick:() => void
}


export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title={props.titleValue}
        onChange={props.onChange}
        />
        { !props.collapsed  && <AccordionBody/> }
    </div>
}


type AccordionTitleProps = {
    title: string
    onChange: () => void

}

function AccordionTitle(props: AccordionTitleProps) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={(e) => props.onChange() }>---{props.title}---</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}







