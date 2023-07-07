import React from "react";
import s from "./UncontrolledStar.module.css"

type StarPropsType = {
    selected: boolean
    setValue: (value: 1 | 2 | 3 | 4 | 5 ) => void
    value: 1 | 2 | 3 | 4 | 5
}

export const UncontrolledStar = ({selected, setValue, value}: StarPropsType) => {

    // const onStarClickHandler = () => {
    //     props.callback(props.value)
    // }

    return (
        <span className={selected ? s.active : ""} onClick={() => {setValue(value)}}> ★ </span>
    )

    // return props.selected ? <span> ★ </span> : <span> ☆  </span>
    }