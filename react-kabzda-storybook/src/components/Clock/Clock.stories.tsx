import React, {useEffect, useState} from "react";
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";

export default {
    title: "Clocks Demo"
};


export const BaseDigitalExample = () => {

    return <div>
       <DigitalClock/>
    </div>
};

export const BaseAnalogExample = () => {

    return <div>
        <AnalogClock/>
    </div>
};