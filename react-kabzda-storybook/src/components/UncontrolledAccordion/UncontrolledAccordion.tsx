import {UncontrolledAccordionTitle} from "./UncontrolledAccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";
import {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string;
    // expanded?: boolean;
}
export const UncontrolledAccordion = ({titleValue}: UncontrolledAccordionPropsType) => {

    const [expanded, setExpanded] = useState(true);

    return (
        <div>
            <UncontrolledAccordionTitle titleValue={titleValue} expanded={expanded} setExpanded={setExpanded}/>
            { expanded && <UncontrolledAccordionBody/>}
        </div>
    )
}