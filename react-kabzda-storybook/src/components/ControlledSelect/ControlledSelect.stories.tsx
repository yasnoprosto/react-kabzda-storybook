import React from "react";
import {ControlledRating} from "../ControlledRating/ControlledRating";
import {ControlledSelect} from "./ControlledSelect";
import {action} from "@storybook/addon-actions";
import {ControlledSelectOnDiv} from "./ControlledSelectOnDiv";

export default {
    title: "Rating Stories",
    component: ControlledRating,
};

export const WithoutValue = () =>
    <>
        <ControlledSelect onChange={action("Value Changed")}
                          items={[{value: "1", title: "Moscow"}, {
                              value: "2",
                              title: "Ufa"
                          }, {value: "3", title: "Sochi"},]}/>
    </>;

export const WithValue = () =>
    <>
        <ControlledSelect onChange={action("Value Changed")}
                          items={[{value: "1", title: "Moscow"}, {
                              value: "2",
                              title: "Ufa"
                          }, {value: "3", title: "Sochi"},]}/>
    </>;

export const SelectWithDivs = () =>
    <>
    <ControlledSelectOnDiv selectedValue={"default value"} onChange={action("value changed")} items={[{value: "1", title: "Moscow"}, {
        value: "2",
        title: "Ufa"
    }, {value: "3", title: "Sochi"},]}/>
    </>;
