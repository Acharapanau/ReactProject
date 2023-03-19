import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./OnOff/UncontrolledOnOff";


function App() {

    let [ratingValue,setRatingValue] = useState<RatingValueType>(0)

    let [accordionCollapsed,setAccordionCollapsed] = useState<boolean>(false)

    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={"App"}>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={() => { setAccordionCollapsed(!accordionCollapsed) }}/>
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={"blabla"}/>
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<OnOff/>*/}
            {/*<UncontrolledAccordion  titleValue={'Menu'}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue} />
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            {/*<OnOff on={switchOn} onChange={(on) => {setSwitchOn(on)}}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    debugger
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;
