import React, {ChangeEvent, ChangeEventHandler, KeyboardEventHandler, KeyboardEvent, useEffect, useState} from "react";
import {log} from "util";

export default {
    title: "UseEffect Demo"
};

export const UseEffectExample = () => {
    console.log("Example is rendering");

    const [fake, setFake] = useState(0);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("useEffect at every render");
        document.title = counter.toString();
    },); //при каждом ререндере

    useEffect(() => {
        console.log("useEffect only at first render");
        document.title = counter.toString();
    }, []);//при первом рендере, один раз

    useEffect(() => {
        console.log("useEffect at first render and when \"counter\" changed ");
        document.title = counter.toString();
    }, [counter]);//при первом рендере и  изменениях в любом элементе массива

    console.log("Example is rendered");

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>;
};

export const UseEffectResetExample = () => {
    console.log("Component rendered");
    const [counter, setCounter] = useState(0);


    useEffect(() => {
        console.log("Effect" + counter);


        return () => {
            console.log("reset");
        };
    }, [counter]);


    return <>
        Counter: {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>;
};

export const KeysTrackerExample = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key);
        };

        // @ts-ignore
        window.addEventListener("keypress", handler);
        return () => {
            // @ts-ignore
            window.removeEventListener("keypress", handler);
        };
    }, [text]);


    return <>
        Last key pressed: {text}
    </>;
};

export const SetTimeoutExample = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            console.log("done");
            setText("3 secs gone");
        }, 3000);
        return () => {
            clearTimeout(timeoutID);
        };

    }, [text]);


    return <>
        text: {text}
    </>;
};