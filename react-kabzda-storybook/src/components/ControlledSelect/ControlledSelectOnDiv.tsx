import React, {FC, KeyboardEvent, useEffect, useState} from "react";
import {ItemType} from "../ControlledAccordion/ControlledAccordion";
import s from "../ControlledSelect/ControlledSelectOnDiv.module.css";

type ControlledSelectOnDivPropsType = {
    selectedValue?: string | undefined
    onChange: (value: string | undefined) => void
    items: ItemType[]
};


export const ControlledSelectOnDiv: React.FC<ControlledSelectOnDivPropsType> = (props) => {
    console.log("ControlledSelectOnDiv");
    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.selectedValue);

    useEffect(() => {
    }, [props.selectedValue]);


    const onOptionClick = (value: string | undefined) => {
        props.onChange(value);
        setActive(!active);
    };


    const mappedItems = props.items.map((i, index) => {
        return (
            <>
                <span onMouseEnter={() => {
                    setHoveredElementValue(i.value);
                }} className={hoveredElementValue === i.title ? s.optionActive : s.option}
                      onClick={() => onOptionClick(i.title)} key={index}
                      style={{display: "inline-block"}}>{i.title}</span>
            </>
        );
    });
    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === " ") {
            setActive(!active);
        }
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendKey = e.key === "ArrowDown"
                    ? props.items[i + 1]
                    : props.items[i - 1]

                    if(pretendKey) {
                        props.onChange(pretendKey.value)
                        break;
                    }
                }
            }
        }
    };

    return (
        <div className={s.customSelectContainer} onKeyUp={onKeyUpHandler} tabIndex={0}>
            <div className={s.customSelect}
                 onClick={() => {
                     setActive(!active);
                 }}
            >
                {props.selectedValue}
                <span className={s.arrow}>{active ? "▲" : "▼"}</span>
            </div>


            {active &&
                <div style={{display: "flex", flexDirection: "column", border: "1px solid black"}}>{mappedItems}</div>}

        </div>
    );
};
