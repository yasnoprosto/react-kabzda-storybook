import {reducer, StateType, TOGGLE_CONSTANT} from "./Reducer";
import {number} from "prop-types";

test("expanded property should be true", () => {

    const state: StateType = {
        expanded: false
    };

    const newState = reducer(state, {type: TOGGLE_CONSTANT});


    expect(newState.expanded).toBe(true);
});

test("expanded property should be false", () => {

    const state: StateType = {
        expanded: true
    };

    const newState = reducer(state, {type: TOGGLE_CONSTANT});


    expect(newState.expanded).toBe(false);
});

test("reducer should throw an error", () => {

    const state: StateType = {
        expanded: true
    };


    expect(() => {
        reducer(state, {type: "BAD_CONST"});
    }).toThrowError();
});