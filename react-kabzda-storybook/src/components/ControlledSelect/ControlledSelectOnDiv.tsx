import React, {FC, useState} from "react";
import {ItemType} from "../ControlledAccordion/ControlledAccordion";

type ControlledSelectOnDivPropsType = {
    selectedValue?: string | undefined
    onChange: (value: string | undefined) => void
    items: ItemType[]
};


export const ControlledSelectOnDiv: React.FC<ControlledSelectOnDivPropsType> = (props) => {

    const [active, setActive] = useState(false);
    const onOptionClick = (value: string | undefined) => {
        props.onChange(value)
        setActive(!active)};


    const mappedItems = props.items.map((i, index) => {
        return (
            <>
            <span onClick={() => onOptionClick(i.title)} key={index} style={{display: "inline-block"}}>{i.title}</span>
            </>
        );
    });
    return (
        <div>
            <div style={{display: "inline-block",right: "0px", width: "", height: "25px", border: "1px solid black", alignItems: "center"}}
                 onClick={() => {
                     setActive(!active);
                 }}
            >
                {props.selectedValue}
                <span style={{}}>{active ? "⌃" : "⌄"}</span>
            </div>


            {active &&
                <div style={{display: "flex", flexDirection: "column", border: "1px solid black"}}>{mappedItems}</div>}

        </div>
    );
};
