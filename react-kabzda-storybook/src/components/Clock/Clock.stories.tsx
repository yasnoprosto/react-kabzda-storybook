import React, {useEffect, useState} from "react";
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";

export default {
    title: "Clocks Demo"
};


export const BaseExample = () => {

    return <div>
       <DigitalClock/>
        <AnalogClock/>
    </div>
};