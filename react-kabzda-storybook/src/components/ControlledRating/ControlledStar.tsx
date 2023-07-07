import React from "react";
import s from "./ControlledStar.module.css"
import {RatingValueType} from "./ControlledRating";

type StarPropsType = {
    selected: boolean
    setRatingValue:() => void
}

export const ControlledStar = ({selected, setRatingValue}: StarPropsType) => {

    return (
        <span className={selected ? s.active : ""} onClick={() => {setRatingValue()}}>★ </span>
    )

    }