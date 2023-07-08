import React, {ChangeEvent, useState} from "react";
import {ItemType} from "../ControlledAccordion/ControlledAccordion";
import styles from ".././ControlledSelect/ControlledSelect.module.css";

export type ControlledSelectPropsType = {
    selectedValue?: string | undefined
    onChange: (value: string | undefined) => void
    items: ItemType[]
}

export const ControlledSelect: React.FC<ControlledSelectPropsType> = (props) => {
    console.log("ControlledSelect");
    const [active, setActive] = useState(false);


    const onChangeSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        props.onChange(event.target.value);
        setActive(true);
    };

    const mappedItemsToSelect = props.items.map((i, index) => {
        return (
            <option key={index} value={i.value}>{i.title}</option>
        );
    });

    const mappedItemsToPage = props.items.map((i, index) => {
        return (
            <div key={index} onClick={() => props.onChange(i.value)}>{i.title}</div>
        );
    });

    const toggleItems   = () => {
        setActive(!active);
    };

    const mappedFilterOptions = props.items.filter(i => i.value === props.selectedValue).map(o => {
            return (
                <h3 onClick={toggleItems} className={"header__select"}>{o.title}</h3>);
        }
    )
    ;

    return (
        <div>
            <div>
                    <select
                        className={styles.select}
                        id="demo-simple-select"
                        onChange={onChangeSelectHandler}
                    >
                        {mappedItemsToSelect}
                    </select>
                    {mappedFilterOptions}
                    {active && mappedItemsToPage}
            </div>

        </div>
    );
};
