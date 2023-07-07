import {useState} from "react";

type OnOffPropsType = {
    setIsOn:(value: boolean)=>void
    isOn:boolean
}
export const ControlledOnOff = ({setIsOn, isOn}: OnOffPropsType) => {
    console.log("UncontrolledOnOff is rendering");


    const turnOn = () => {
      setIsOn(true)
    }

    const turnOff = () => {
        setIsOn(false)
    }

    const onBtnStyle = {
        width: "30px",
        height: "30px",
        margin: "5px",
        marginRight: "0px",
        padding: "2px",
        border: "1px solid black",
        display: "inline",
        backgroundColor: isOn ? "green" : "white"
    };
    const offBtnStyle = {
        width: "30px",
        height: "30px",
        padding: "2px",
        border: "1px solid black",
        display: "inline",
        backgroundColor: !isOn ? "red" : "white"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        margin: "0 5px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: isOn ? "green" : "red",
    };

    return (
        <div>
            <div onClick={() => {turnOn()}} style={onBtnStyle}>On</div>
            <div onClick={() => {turnOff()}} style={offBtnStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};