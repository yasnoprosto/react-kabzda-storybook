import {ItemType} from "./ControlledAccordion";

type AccordionBodyPropsType = {
    collapsed?: boolean;
    items: ItemType[]
    onClick: (value: any) => void
}

export const ControlledAccordionBody = (props: AccordionBodyPropsType) => {
    console.log("UncontrolledAccordion list is rendering");
    return (
        <>
            {
                props.items.map((item, index) => {
                    return (
                        <li onClick={() => {props.onClick(item.value)}} key={index}>{item.title}</li>
                    )
                })
            }
        </>
    );
};
