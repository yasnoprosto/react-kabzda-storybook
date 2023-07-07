import React from "react";
import {ControlledStar} from "./ControlledStar";

type RatingPropsType = {
    value: RatingValueType;
    setRatingValue:(value: RatingValueType)=>void
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export const ControlledRating = ({value, setRatingValue}: RatingPropsType) => {
    console.log("ControlledRating is rendering");


    return (
        <div>
            <ControlledStar selected={value > 0} setRatingValue={() => {setRatingValue(1)}}/>
            <ControlledStar selected={value > 1} setRatingValue={() => {setRatingValue(2)}}/>
            <ControlledStar selected={value > 2} setRatingValue={() => {setRatingValue(3)}}/>
            <ControlledStar selected={value > 3} setRatingValue={() => {setRatingValue(4)}}/>
            <ControlledStar selected={value > 4} setRatingValue={() => {setRatingValue(5)}}/>
        </div>
    );
};
// }