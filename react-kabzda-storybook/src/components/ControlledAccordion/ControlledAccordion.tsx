import React from "react";
import {ControlledAccordionTitle} from "./ControlledAccordionTitle";
import {ControlledAccordionBody} from "./ControlledAccordionBody";

export type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string;
    setExpanded:()=>void
    expanded: boolean
    items: ItemType[]
    onClick: (value: any) => void
}

const ControlledAccordionTitleMemo = React.memo(ControlledAccordionTitle)
const ControlledAccordionBodyMemo = React.memo(ControlledAccordionBody)

export const ControlledAccordion = ({titleValue, setExpanded, expanded, items, onClick}: AccordionPropsType) => {
    console.log("UncontrolledAccordion is rendering")
    return (
        <div>
            <ControlledAccordionTitleMemo titleValue={titleValue} setExpanded={setExpanded}/>
            {expanded && <ControlledAccordionBodyMemo items={items} onClick={onClick}/> }
        </div>
    )
}