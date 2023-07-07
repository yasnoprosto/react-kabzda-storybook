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
export const ControlledAccordion = ({titleValue, setExpanded, expanded, items, onClick}: AccordionPropsType) => {
    console.log("UncontrolledAccordion is rendering")
    return (
        <div>
            <ControlledAccordionTitle titleValue={titleValue} setExpanded={setExpanded}/>
            {expanded && <ControlledAccordionBody items={items} onClick={onClick}/> }
        </div>
    )
}