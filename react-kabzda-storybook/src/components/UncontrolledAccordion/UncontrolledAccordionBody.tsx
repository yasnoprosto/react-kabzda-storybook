import {useState} from "react";

type UncontrolledAccordionBodyPropsType = {
    // collapsed?: boolean;
}

export const UncontrolledAccordionBody = (props: UncontrolledAccordionBodyPropsType) => {


    console.log("UncontrolledAccordion list is rendering");
    return (
        <div>
            <div>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </div>
        </div>
    );
};
