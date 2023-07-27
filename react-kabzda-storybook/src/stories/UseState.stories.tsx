import React, {useMemo} from "react";
import {useState} from "react";
import {log} from "util";

export default {
    title: "UseState demo"
};

function generateData() {
    console.log("generateData");
    return 1
}

export const ExampleUseState = () => {
    console.log("Example");

    // const initialValue = useMemo(() => generateData(), []);

    const [counter, setCounter] = useState(generateData);

    const changer = (state: number) => {
        console.log("changer");
        return state + 1
    }

    return <>
        <button onClick={() => {setCounter(changer);}}> + </button>
        {counter}
    </>;
};