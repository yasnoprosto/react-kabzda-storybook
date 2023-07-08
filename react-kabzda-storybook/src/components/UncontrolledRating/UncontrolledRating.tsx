import React, {useState} from "react";
import {UncontrolledStar} from "./UncontrolledStar";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5;
}

export const UncontrolledRating = (props: RatingPropsType) => {
    console.log("ControlledRating is rendering");

    const [value, setValue] = useState<number>(0);


    const UncontrolledStarMemo = React.memo(UncontrolledStar)

    return (
        <div>
            <UncontrolledStarMemo selected={value > 0} setValue={setValue} value={1}/>
            <UncontrolledStarMemo selected={value > 1} setValue={setValue} value={2}/>
            <UncontrolledStarMemo selected={value > 2} setValue={setValue} value={3}/>
            <UncontrolledStarMemo selected={value > 3} setValue={setValue} value={4}/>
            <UncontrolledStarMemo selected={value > 4} setValue={setValue} value={5}/>
        </div>
    );
};
// }