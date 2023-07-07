import React from "react";
import { action } from "@storybook/addon-actions"
import {ControlledRating} from "./ControlledRating";

export default {
    title: "Rating Stories",
    component: ControlledRating,
};

export const EmptyStar = () => <ControlledRating value={0} setRatingValue={x=>x}/>
export const Rating1Star = () => <ControlledRating value={1} setRatingValue={x=>x}/>
export const Rating2Star = () => <ControlledRating value={2} setRatingValue={x=>x}/>
export const Rating3Star = () => <ControlledRating value={3} setRatingValue={x=>x}/>
export const Rating4Star = () => <ControlledRating value={4} setRatingValue={x=>x}/>
export const Rating5Star = () => <ControlledRating value={5} setRatingValue={x=>x}/>