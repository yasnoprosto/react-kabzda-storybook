import {UncontrolledAccordionTitle} from "./UncontrolledAccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";
import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./Reducer";

type UncontrolledAccordionPropsType = {
    titleValue: string;
    // expanded?: boolean;
}
export const UncontrolledAccordion = ({titleValue}: UncontrolledAccordionPropsType) => {
    console.log("UncontrolledAccordion");

    // const [expanded, setExpanded] = useState(true);
    const [state, dispatch] = useReducer(reducer, { expanded: false});

    const UncontrolledAccordionTitleMemo = React.memo(UncontrolledAccordionTitle)
    const UncontrolledAccordionBodyMemo = React.memo(UncontrolledAccordionBody)


    return (
        <div>
            <UncontrolledAccordionTitleMemo titleValue={titleValue} expanded={state.expanded} setExpanded={() => {
                dispatch({type: TOGGLE_CONSTANT});
            }}/>
            {state.expanded && <UncontrolledAccordionBodyMemo/>}
        </div>
    );
};