export interface ActionType {
    type: string;
}

export interface StateType {
    expanded: boolean;
}

export const TOGGLE_CONSTANT = "TOGGLE-EXPANDED";

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            const stateCopy = {...state, expanded: !state.expanded}
            return stateCopy;
        default:
            throw new Error("Bad action");
    }
};

